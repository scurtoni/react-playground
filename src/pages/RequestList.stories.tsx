import React from "react";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {Provider} from "react-redux";
import configureStore from "./../state/redux";
import {BrowserRouter as Router} from "react-router-dom";

import RequestList from "./RequestList";

// eslint-disable-next-line storybook/story-exports
const store = configureStore();

const withRouter = (story) => <Router>{story()}</Router>;
const withProvider = (story) => <Provider store={store}>{story()}</Provider>;

export default {
  title: "Pages/RequestList",
  decorators: [withRouter, withProvider],
  component: RequestList
} as ComponentMeta<typeof RequestList>;

const Template: ComponentStory<typeof RequestList> = (args) => <RequestList />;

export const BaseRequestList = Template.bind({});
