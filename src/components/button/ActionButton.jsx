import React from "react";
import PropTypes from "prop-types";
import Spinner from "../Spinner";
import { Add, Delete, Edit } from "../../svgs/svgIcons";


const buttons = {
    add: <div className="border border-green-500 rounded h-6 w-6 text-green-500">{Add}</div>,
    edit: <div className="border border-yellow-800 rounded h-6 w-6 text-yellow-800 hover:border-yellow-600">{Edit}</div>,
    delete: <div className="border border-red-800 rounded h-6 w-6 text-red-800">{Delete}</div>,
}


const ActionButton = (props) => {
    return (
        <button disabled={props.loading} onClick={props.onClick}>
            {
                props.loading ? <Spinner /> :
                    !!props.type ?
                        buttons[props.type] : props.children
            }
        </button>
    );
}

ActionButton.propTypes = {
    loading: PropTypes.bool,
    onClick: PropTypes.func
}

export default ActionButton;