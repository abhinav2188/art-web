import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

const ActionButton = (props) => {
    return (
        <button disabled={props.loading}
            className="bg-sky-500 hover:bg-sky-700 p-2 font-medium text-sm rounded-full disabled:bg-gray-400 disabled:hover:bg-gray-400"
            type="submit"
            onClick={props.onClick}>
            {
                props.loading ? <Spinner /> : props.children
            }
        </button>
    );
}

ActionButton.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func
}

export default ActionButton;