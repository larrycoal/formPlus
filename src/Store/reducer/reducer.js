
const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case "all_template":
      return {
        ...state,
        template:action.payload
      }
    default:
      return state;
  }
};

export default templateReducer;
