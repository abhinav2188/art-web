import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

const SubmitButton = (props) => {
    return (
        <button disabled={props.loading}
            className={`${props.className} bg-sky-500 hover:bg-sky-700 py-2 px-8 font-medium text-sm rounded-full disabled:bg-gray-400 disabled:hover:bg-gray-400`}
            type="submit"
            onClick={props.onClick}>
            {
                props.loading ? <Spinner /> :
                    !!props.children ? props.children :
                        "Submit"
            }
        </button>
    );
}

SubmitButton.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func
}

export default SubmitButton;