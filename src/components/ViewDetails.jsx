import React from "react";

const ViewDetails = ({ data, viewFields, actions, title }) => {

    return (
        <div className="border rounded-lg flex flex-col overflow-hidden">
            <div className="border flex justify-between items-center px-2">
                <span className="font-bold uppercase">{title}</span>
                <span>
                    {actions}
                </span>
            </div>
            {
                viewFields.map(viewField =>
                    <div className="flex gap-2 border py-1 px-2 items-center">
                        <span className="text-sm uppercase text-blue-800 font-bold">{viewField.label}</span>
                        <span>{String(data[viewField.name])}</span>
                    </div>
                )
            }
        </div>
    );

}

export default ViewDetails;