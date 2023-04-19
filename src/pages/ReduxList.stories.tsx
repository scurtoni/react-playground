import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Provider} from "react-redux";
import configureStore from "../state/redux";
import {BrowserRouter as Router} from "react-router-dom";

import ReduxList from "./ReduxList";

// eslint-disable-next-line storybook/story-exports
const store = configureStore();

const withRouter = (story) => <Router>{story()}</Router>;
const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

export default {
  title: "Pages/ReduxList",
  decorators: [withRouter, withProvider],
  component: ReduxList
} as ComponentMeta<typeof ReduxList>;

const Template: ComponentStory<typeof ReduxList> = (args) => <ReduxList />;

export const BaseRequestList = Template.bind({});
