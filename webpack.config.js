const path = require("path");
const mode = process.env.NODE_ENV || "development";
//const globImporter = require("node-sass-glob-importer");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const SVGSpritemapPlugin = require("svg-spritemap-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//const PRODUCTION = "production";
/*
const isProduction = (mode) => {
  console.log("is production: " + (mode === PRODUCTION));
  return mode === PRODUCTION;
};*/

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, "src", "index.tsx")
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
    path: path.resolve(__dirname, "dist")
  },
  performance: {
    maxEntrypointSize: 240000
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss", ".map"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "tsconfig.json"
      })
    ],
    alias: {}
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false
            }
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              sassOptions: {
                outputStyle: "compressed"
              }
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: "file-loader",
        options: {
          name: "images/[name].[ext]",
          outputPath: "images",
          publicPath: "../images"
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "fonts",
          publicPath: "../fonts"
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist")
    },
    hot: true,
    compress: true,
    port: 9000,
    historyApiFallback: true
  },
  optimization: {
    splitChunks: {
      chunks: "all", // Split code from all chunks (sync and async)
      minSize: 51200,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/, // Include node_modules packages in vendor chunk
          name: "vendors", // Output vendor chunk name
          chunks: "all" // Split vendor code from all chunks (sync and async)
        },
        default: false // Disable default cacheGroup to prevent default behavior
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "app.css"
    }),
    new SVGSpritemapPlugin("src/icons/*.svg", {
      styles: {
        filename: "src/style/helpers/_sprites.scss",
        keepAttributes: true
      }
    }),
    new BundleAnalyzerPlugin()
  ]
};
