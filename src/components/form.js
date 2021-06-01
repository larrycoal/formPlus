import React, { useState } from "react";
import { FormField } from "../Utils";

const Form = () => {
  const [state] = useState({
    search: {
      name: "search",
      type: "text",
      placeholder: "Search Templates",
    },
    Category: {
      name: "category",
      type: "select",
      options: ["All", "Health", "E-commerce", "Agriculture"],
    },
    Order: {
      name: "order",
      type: "select",
      options: ["Default", "Ascending", "Descending"],
    },
    Date: {
      name: "date",
      type: "select",
      options: ["Default", "Ascending", "Descending"],
    },
  });
  return (
    <div className="form_wrapper">
      <div>
        <FormField input={state.search} />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div>
        <span>Sort By:</span>
        <FormField input={state.Category} />
        <FormField input={state.Order} />
        <FormField input={state.Date} />
      </div>
    </div>
  );
};

export default Form;
