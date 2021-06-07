import React, { useState,useEffect } from "react";
import { TemplateCard } from "../Utils";
import Pagination from "./pagination";
import {connect} from 'react-redux'
import {fetchTemplate} from '../Store/action'

const Template = (props) => {
 useEffect(()=>{
     props.dispatch(fetchTemplate())
 },[props])
  const { filteredTemplate, category,  } = props;
  let totalPage = 0;
  const [state, setState] = useState({
    current: 0,
    page: 1,
  });

  const showTemplate = () => {
    if (!filteredTemplate) {
      return <section className="loader"><section><section></section></section></section>;
    } 
    if(filteredTemplate.error){
      return <section className="networkError">{filteredTemplate.message}</section>
    }
    totalPage = Math.ceil(filteredTemplate.length / 2000);
    let currentPage = filteredTemplate.slice(state.current, state.current + 2000);
    return currentPage.map((template, i) => {
      return <TemplateCard template={template} key={i} />;
    });
  };
  const nextPage = () => {
    if (state.page < totalPage) {
      setState({
        ...state,
        page: state.page + 1,
        current: state.current + 2000,
      });
    }
  };
  const prevPage = () => {
    if (state.page > 1) {
      setState({
        ...state,
        page: state.page - 1,
        current: state.current - 2000,
      });
    }
  };
  return (
    <>
      <div className="template_wrapper">
        <div className="templateInfo">
          <span>
            <i class="fa fa-info" aria-hidden="true"></i>
            Tada! get started with free template.Cant find what you are looking
            for? Search from the 1000+ available templates
          </span>
        </div>
        <div className="templateCount">
          <span>{category} Templates</span>
          <span>
            {state.current + 1}-{state.current + 2000} template
          </span>
        </div>
        <div className="templateCard">{showTemplate()}</div>
      </div>
      <Pagination
        nextPage={() => nextPage()}
        prevPage={() => prevPage()}
        page={state.page}
        totalPage={totalPage}
      />
    </>
  );
};

const mapStateToProps = (state)=>{
  return state.error? state.error : state.template
}

export default connect(mapStateToProps)(Template);
