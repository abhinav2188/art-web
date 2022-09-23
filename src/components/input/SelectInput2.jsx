import React, { useEffect, useState } from "react";
import Select from "react-select";

const SelectInput2 = ({
  optionsList,
  name,
  label,
  onChange,
  multiple,
  value,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    if (!!!multiple) {
      setOptions([
        ...optionsList,
        {
          value: "",
          label: "none",
        },
      ]);
    } else {
      setOptions(optionsList);
    }
  }, [optionsList]);

  useEffect(() => {
    if (!!value) {
      let vals = value.split(",");
      let opvals2 = optionsList.filter((option) => vals.includes(option.value));
      setSelectedOptions(opvals2);
    }
  }, [value]);

  function handleSelectChange(selectedItems) {
    console.log(selectedItems);
    setSelectedOptions(selectedItems);
    let selectedValue = "";
    if (multiple) {
      selectedValue = selectedItems.map((item) => item.value).join(",");
    } else {
      selectedValue = selectedItems.value;
    }
    onChange(name, selectedValue);
  }

  return (
    <label htmlFor={name} className="w-full">
      <span>{label}</span>
      <Select
        options={options}
        onChange={handleSelectChange}
        isMulti={multiple}
        value={selectedOptions}
      />
    </label>
  );
};

export default SelectInput2;
