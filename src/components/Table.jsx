import React from "react";
import PageButton from "./button/PageButton";

const Table = ({ viewFields, entriesList, totalEntries, totalPages, pageNo, setPageNo, entryActions, title, tableActions }) => {
    return (
        <div className="flex flex-col border">
            <div className="flex justify-between">
                <p className="uppercase">{title}</p>
                <p>Total Entries: {totalEntries}</p>
                <PageButton pageNo={pageNo} setPageNo={setPageNo} totalPagesCount={totalPages} />
                {tableActions}
            </div>
            {
                entriesList.length > 0 &&
                <table>
                    <thead>
                        <tr className="bg-gray-600 text-white">
                            {
                                viewFields.map((viewField) =>
                                    <td key={viewField.label}>{viewField.name}</td>
                                )
                            }
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            entriesList.map(
                                (entry, i) =>
                                    <tr key={i} className="border">
                                        {
                                            viewFields.map(viewField =>
                                                <td>{String(entry[viewField.name])}</td>)
                                        }
                                        <td>
                                            {entryActions(entry.id)}
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default Table;