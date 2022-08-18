import React from "react";
import { handleFormDataChange } from "../utils/FormUtils";
import ActionButton from "./button/ActionButton";
import SubmitButton from "./button/SubmitButton";
import BoolSelectInput from "./input/BoolSelectInput";
import DateInput from "./input/DateInput";
import FileInput from "./input/FileInput";
import NumberInput from "./input/NumberInput";
import SelectInput from "./input/SelectInput";
import SelectInput2 from "./input/SelectInput2";
import TextAreaInput from "./input/TextAreaInput";
import TextInput from "./input/TextInput";
import TextPassword from "./input/TextPassword";

/*
const inputComponents = {
    text: TextInput,
    password: TextPassword,
    date: DateInput,
    textArea: TextAreaInput,
    dropdown: SelectInput,
    boolean: BoolSelectInput
}
*/


const CustomInput = ({ field, value, handleChange, handleChange2, dropdowns }) => {
    switch (field.type) {
        case "text":
            return (
                <TextInput label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "password":
            return (
                <TextPassword label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "date":
            return (
                <DateInput label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "dropdown2":
            return (
                <SelectInput label={field.label} name={field.name} onChange={handleChange}
                    optionsList={dropdowns[field.dropdownType].values}
                    value={value} />
            );
        case "dropdown":
            return (
                <SelectInput2 label={field.label} name={field.name} onChange={handleChange2}
                    optionsList={dropdowns[field.dropdownType].values}
                    value={value} multiple={field.multiple} />
            );
        case "boolean":
            return (
                <BoolSelectInput label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "textArea":
            return (
                <TextAreaInput label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "number":
            return (
                <NumberInput label={field.label} name={field.name} onChange={handleChange} value={value} />
            );
        case "file":
            return (
                <FileInput label={field.label} name={field.name} onChange={handleChange2} accept={field.accept} />
            );
    }
}


const Form = ({ fields, setFormData, onSubmit, formData, loading, dropdowns, multipart, title, reloadDropdown }) => {

    const handleChange = (event) => {
        handleFormDataChange(event, setFormData);
    }

    const handleChange2 = (name, value) => {
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="flex flex-col w-full border rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3 border-b pb-1">
                <h3>{title}</h3>
                <ActionButton type="reload" onClick={reloadDropdown} />
            </div>
            <form encType={multipart && "multipart/form-data"} className="flex flex-col gap-2">
                {
                    fields.map(field =>
                        <CustomInput field={field} value={formData[field.name]} handleChange={handleChange} handleChange2={handleChange2} dropdowns={dropdowns} />
                    )
                }
                <SubmitButton className="mt-4 self-center" onClick={(event) => {
                    event.preventDefault();
                    onSubmit();
                }} loading={loading} />
            </form>
        </div>
    );

}

export default Form;