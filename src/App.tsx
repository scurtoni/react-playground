import React, {Suspense} from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "./state/redux";
import {RecoilRoot} from "recoil";
import {initi18n} from "@utils/i18n";

const store = configureStore();

initi18n();

const Dashboard = React.lazy(() => import(/* webpackChunkName: "dashboard-page" */ "./pages/Dashboard"));
const RequestList = React.lazy(() => import(/* webpackChunkName: "request-list-page" */ "./pages/ReduxList"));
const RequestListRecoil = React.lazy(() => import(/* webpackChunkName: "recoil-page" */ "./pages/RequestListRecoil"));
const ContractList = React.lazy(() => import(/* webpackChunkName: "contract-list-page" */ "./pages/ContractList"));
const RequestDetails = React.lazy(() => import(/* webpackChunkName: "request-details-page" */ "./pages/RequestDetails"));
const TailwindSample = React.lazy(() => import(/* webpackChunkName: "tailwind-page" */ "./pages/TailwindSample"));
const RequestForm = React.lazy(() => import(/* webpackChunkName: "request-form-page" */ "./pages/RequestForm"));

const App = () => (
  <RecoilRoot>
    <Provider store={store}>
      <Router>
        <div>
          <ul className="flex">
            <li className="mr-6">
              <Link to="/" className="text-blue-500 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/redux-list" className="text-blue-500 hover:text-blue-800">
                People List (Redux)
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/recoil-list" className="text-blue-500 hover:text-blue-800">
                People list (Recoil)
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/contract-list" className="text-blue-500 hover:text-blue-800">
                Contract list
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/tailwind" className="text-blue-500 hover:text-blue-800">
                Tailwind sample
              </Link>
            </li>
            <li className="mr-6">
              <Link to="/request-form" className="text-blue-500 hover:text-blue-800">
                Request form
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<div>Loading..</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/redux-list" element={<RequestList />} />
              <Route path="/redux-list/:id" element={<RequestDetails />} />
              <Route path="/request-form" element={<RequestForm />} />
              <Route path="/contract-list" element={<ContractList />} />
              <Route path="/recoil-list" element={<RequestListRecoil />} />
              <Route path="/tailwind" element={<TailwindSample />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </Provider>
  </RecoilRoot>
);

export default App;
