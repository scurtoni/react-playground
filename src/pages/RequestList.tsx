import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SearchActionTypes} from "../state/redux/common.types";
import {ApplicationState} from "@models";

const RequestList = () => {
  const dispatch = useDispatch();

  const {results} = useSelector((state: ApplicationState) => state.search);

  useEffect(() => {
    dispatch({
      type: SearchActionTypes.API_POSTS_THUNK,
      payload: {}
    });
  }, [dispatch]);

  return (
    <div>
      {results.map((item) => (
        <div key={item.id}>
          <Link to={`/request-list/${item.id}`}>item {item.id}</Link>
        </div>
      ))}
    </div>
  );
};

export default RequestList;
