import axios from "axios";

export const template = async () => {
  let res = await axios
    .get(
      "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
    )
    .then((res) => {
      return res.data.map((data) => {
        return {
          ...data,
          category: data.category[Math.floor(Math.random() * 2)],
        };
      });
    });

  return {
    type: "all_template",
    payload: res,
  };
};
export const fetchTemplate = () => {
  return {
    type: "fetch_template",
  };
};

export const updateCategory = (newTemplate) => {
  return {
    type: "filter_category",
    payload: newTemplate,
  };
};
export const updateSearch = (newTemplate) => {
  return {
    type: "filter_search",
    payload: newTemplate,
  };
};
export const updateOrder = (newTemplate) => {
  return {
    type: "filter_order",
    payload: newTemplate,
  };
};
export const updateDate = (newTemplate) => {
  return {
    type: "filter_date",
    payload: newTemplate,
  };
};
