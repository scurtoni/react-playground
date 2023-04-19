import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SearchActionTypes} from "../state/redux/common.types";
import {ApplicationState} from "@models";

const ReduxList = () => {
  const dispatch = useDispatch();

  const {results} = useSelector((state: ApplicationState) => state.search);

  /* change type to test redux saga or redux observable */
  useEffect(() => {
    dispatch({
      type: SearchActionTypes.API_REDUX_LIST_SAGA,
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

export default ReduxList;
