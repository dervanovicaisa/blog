import { GET_RECORDS_BLOG } from "./BlogReduxReducer";
import axios from "axios";

export const getRecordsBlog = (props) => (dispatch) => {
  return axios
    .get("http://127.0.0.1:3000/testdata")
    .then((res) => {
      dispatch({
        type: GET_RECORDS_BLOG,
        payload: res,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
