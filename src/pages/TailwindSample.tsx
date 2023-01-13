import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {SearchActionTypes} from "../state/redux/common.types";
import {ApplicationState} from "@models";

import "./../style/index-tailwind.scss";

const TailwindSample = () => {
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
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="border-b">
                  <tr>
                    <th scope="col" className="text-sm font-medium text-red-900 px-6 py-4 text-left">
                      #
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      First
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Last
                    </th>
                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((item) => (
                    <tr className="border-b" key={item.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{item.title}</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindSample;
