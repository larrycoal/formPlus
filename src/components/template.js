import React, { useState } from "react";
import { TemplateCard } from "../Utils";
import Pagination from "./pagination";

const Template = (props) => {
  const { template,category } = props;
  let totalPage = 0;
  const [state, setState] = useState({
    current: 0,
    page: 1,
  });

  const showTemplate = () => {
      //console.log(template)
    if (template.length === 0) {
      return <div>Loading</div>;
    }
    totalPage = Math.floor(template.length / 2000);
    let currentPage = template.slice(state.current, state.current + 2000);
    return currentPage.map((template,i) => {
      return <TemplateCard template={template} key={i} />;
    });
  };
  const nextPage = () => {
    if (state.page < 12) {
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

export default Template;
