import React from "react";
import PropTypes from "prop-types";

const PageButton = (props) => {
    return (
        <div className="flex items-center">
            <span>Page :</span>
            <button className="bg-gray-200 rounded w-5 h-5" onClick={() => {
                props.setPageNo(prevPageNo => (prevPageNo - 1) < 0 ? prevPageNo : prevPageNo - 1);
            }}>-</button>
            <p className="w-12">{props.pageNo + 1}</p>
            <button className="bg-gray-200 rounded w-5 h-5" onClick={() => {
                props.setPageNo(prevPageNo => (prevPageNo + 1) >= props.totalPagesCount ? prevPageNo : prevPageNo + 1);
            }}>+</button>
        </div>
    )
}

PageButton.propTypes = {
    pageNo: PropTypes.number,
    setPageNo: PropTypes.func,
    totalPagesCount: PropTypes.number
}

export default PageButton;