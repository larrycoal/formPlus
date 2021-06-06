import React, { useState } from "react";
import { FormField } from "../Utils";
import {connect} from 'react-redux'
import {filter} from '../Utils/index'
import {updateCategory,updateDate,updateOrder,updateSearch} from '../Store/action'
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
    template:[],
    filteredTemplate:[]
  });


  const handleChange = (input)=>{
      let newState = state
      newState.template=props.template
      if(input.name === "category"){
          newState.search.value=""
          newState.order.value="Default"
          newState.date.value="Default"
          newState[input.name].value=input.value
         
          setState({
              ...newState
          })
        let filteredTemplate =  filter(props.template,state[input.name])
        props.dispatch(updateCategory(filteredTemplate))

      }
      else if(input.name === "search"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        let filteredTemplate =  filter(props.template,state[input.name])
        props.dispatch(updateSearch(filteredTemplate))
    }
    else if(input.name === "order"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        let filteredTemplate =  filter(props.filteredTemplate,newState[input.name])
        props.dispatch(updateOrder(filteredTemplate))
    }else if(input.name === "date"){
        newState[input.name].value=input.value
        setState({
            ...newState
        })
        let filteredTemplate =  filter(props.template,newState[input.name])
        props.dispatch(updateDate(filteredTemplate))
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
const mapStateToProps=(state)=>{
    return state.template
}
export default connect(mapStateToProps)(Form);
