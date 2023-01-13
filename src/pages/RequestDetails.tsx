import React from "react";
import {useParams} from "react-router-dom";

const RequestDetails = () => {
  const {id} = useParams();
  return <div>Request details with {id}</div>;
};

export default RequestDetails;
