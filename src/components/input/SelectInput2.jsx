import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectInput2 = ({ optionsList, name, label, onChange, multiple }) => {

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(optionsList.map(option => ({
            value: option.value,
            label: option.value
        })));
    }, [optionsList])


    function handleSelectChange(selectedItems) {
        console.log(selectedItems);
        let selectedValue = "";
        if (multiple) {
            selectedValue = selectedItems.map(item => item.value).join(", ");
            setSelectedOptions(selectedValue);
        }
        else {
            selectedValue = selectedItems.value;
        }
        onChange(name, selectedValue);
    }

    return (
        <label htmlFor={name} className="w-full">
            <span>{label}</span>
            <Select options={options} onChange={handleSelectChange} isMulti={multiple} />
        </label>
    );

}

export default SelectInput2;