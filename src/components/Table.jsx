import React from "react";
import PageButton from "./button/PageButton";
import { formatField } from "../utils/StringUtils";

const Table = ({ viewFields, entriesList, totalEntries, totalPages, pageNo, setPageNo, entryActions, title, tableActions }) => {

    return (
        <div className="flex flex-col overflow-auto">
            <div className="flex justify-between items-center px-2 py-1">
                <div className="flex items-center gap-2">
                    <p className="uppercase text-lg font-bold">{title}</p>
                    {!!totalEntries && <p className="rounded px-1 text-sm border">Total Enteries : {totalEntries}</p>}
                    {!!totalPages &&
                        <PageButton pageNo={pageNo} setPageNo={setPageNo} totalPagesCount={totalPages} />
                    }
                </div>
                {tableActions}
            </div>
            {
                entriesList.length > 0 &&
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg border">
                <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                    {
                        viewFields.map((viewField) =>
                            <th className="py-2 px-4" key={viewField.label}>{viewField.label}</th>
                        )
                    }
                    <th className="p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                                    entriesList.map(
                                        (entry, i) =>
                                            <tr key={i} className="bg-white border-b hover:bg-gray-50 ">
                                                {
                                                    viewFields.map(viewField =>
                                                        <td className="px-2 py-2">{formatField(entry[viewField.name])}</td>)
                                                }
                                                <td className="px-2 py-2">
                                                    {entryActions &&
                                                        entryActions(entry)}
                                                </td>
                                            </tr>
                                    )
                                } 
                    </tbody>
                </table>
            </div>
                    }
        </div>
    );
}

export default Table;