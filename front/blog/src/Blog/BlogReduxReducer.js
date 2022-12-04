export const GET_RECORDS_BLOG = "GET_RECORDS_BLOG";

export const initialSate = {
  data: {
    data: [],
    count: [],
  },
  tableOptions: {
    sizePerPage: 10,
    currentPage: 1,
    skip: 0,
    limit: 10,
    sort: {
      createdAt: 1,
    },
  },
  urlParams: "",
  loading: false,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialSate, action) {
  switch (action.type) {
    case GET_RECORDS_BLOG:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
}
