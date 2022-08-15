import React, { useState } from "react";
import ActionButton from "../../components/button/ActionButton";
import { getDealsExcel } from "../../services/excelDownloadService";

const ExportExcel = () => {

    const [loading, setLoading] = useState(false);
    const [isDownloadable, setIsDownloadable] = useState(false);
    const [link, setLink] = useState('');

    function exportExcel() {
        setLoading(true);
        getDealsExcel().then(
            data => {
                if (!!data) {
                    const url = URL.createObjectURL(new Blob([data]));
                    console.log(url);
                    setLink(url);
                    setIsDownloadable(true);
                    alert("Excel file is created. Click Download!")
                }
                setLoading(false);
            }
        )
    }

    function onDownload() {
        // setIsDownloadable(false);
        // setLink('');
    }


    return (
        isDownloadable ?
            <ActionButton onClick={onDownload}><a href={link} download="data.xlsx">Download</a></ActionButton> :
            <ActionButton onClick={exportExcel} loading={loading}>Export as Excel</ActionButton>
    );
}

export default ExportExcel;