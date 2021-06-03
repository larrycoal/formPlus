import React from 'react';

const pagination = (props) => {
    return (
        <div className="pagination_wrapper">
            <div>
                <button disabled={props.page === 1 ? true : false} onClick={()=>props.prevPage()}>Previous</button>
            </div>
            <div>
                <span>{props.page}</span>
                of
                <span>{props.totalPage}</span>
            </div>
            <div>
            <button disabled={props.totalPage <= props.page ? true : false} onClick={()=>props.nextPage()}>Next</button>
            </div>
        </div>
    );
};

export default pagination;