import React, { useState } from "react";
import { FormField } from "../Utils";

const Form = (props) => {
  const [state,setState] = useState({
    search: {
      name: "search",
      type: "text",
      placeholder: "Search Templates",
      value:""
    },
    category: {
      name: "category",
      type: "select",
      options: ["All", "Health", "E-commerce", "Education"],
      value:""
    },
    order: {
      name: "order",
      type: "select",
      options: ["Default", "Ascending", "Descending"],
      value:""
    },
    date: {
      name: "date",
      type: "select",
      options: ["Default", "Ascending", "Descending"],
      value:""
    },
  });


  const handleChange = (input)=>{
      let newState = state
      if(input.name === "category"){
          newState.search.value=""
          newState.order.value="Default"
          newState.date.value="Default"
          newState[input.name].value=input.value
          setState({
              ...newState
          })
          props.filter(newState[input.name])
      }else if(input.name === "search"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        props.filter(newState[input.name])
    }else if(input.name === "order"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        props.filter(newState[input.name])
    }else if(input.name === "date"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        props.filter(newState[input.name])
    }
      
  }
  return (
    <div className="form_wrapper">
      <div>
        <FormField input={state.search} handleChange={handleChange} />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <div>
        <span>Sort By:</span>
        <FormField input={state.category} handleChange={handleChange} />
        <FormField input={state.order} handleChange={handleChange}/>
        <FormField input={state.date} handleChange={handleChange}/>
      </div>
    </div>
  );
};

export default Form;
