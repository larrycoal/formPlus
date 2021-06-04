const templateReducer = (state = {}, action) => {
  switch (action.type) {
    case "all_template":
      return {
        ...state,
        template: action.payload,
        filteredTemplate: action.payload,
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
        filteredTemplate: action.payload.template,
        category: action.payload.category,
        order:action.payload.order,
        date:action.payload.date
      };
    case "filter_search":
      return {
        ...state,
        filteredTemplate: action.payload,
      };
    case "filter_order":
      return {
        ...state,
        filteredTemplate: action.payload.template,
        order:action.payload.order
      };
      case "filter_date":
      return {
        ...state,
        filteredTemplate: action.payload.template,
        date:action.payload.date
      };
    default:
      return state;
  }
};

export default templateReducer;
