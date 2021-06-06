const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case "all_template":
      return {
        ...state,
        template: action.payload,
        filteredTemplate:action.payload,
        category: "All",
        order:"Default",
        date:"Default"
      };
    case "fetch_template":
      return {
        ...state,
      };
    case "filter_category":
      return {
        ...state,
        ...action.payload,
        order:action.payload.order,
        date:action.payload.date
      };
    case "filter_search":
      return {
        ...state,
        ...action.payload,
      };
    case "filter_order":
      return {
        ...state,
        ...action.payload,
      };
      case "filter_date":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default templateReducer;
