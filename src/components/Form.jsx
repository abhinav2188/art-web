import React from "react";
import { handleFormDataChange } from "../utils/FormUtils";
import SubmitButton from "./button/SubmitButton";
import BoolSelectInput from "./input/BoolSelectInput";
import DateInput from "./input/DateInput";
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
        case "dropdown":
            return (
                <SelectInput2 label={field.label} name={field.name} onChange={handleChange2}
                    optionsList={dropdowns[field.dropdownType].values}
                    multiple={field.multiple} />
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
    }
}


const Form = ({ fields, setFormData, onSubmit, formData, loading, dropdowns }) => {

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
        <form>
            {
                fields.map(field =>
                    <CustomInput field={field} value={formData[field.name]} handleChange={handleChange} handleChange2={handleChange2} dropdowns={dropdowns} />
                )
            }
            <SubmitButton onClick={(event) => {
                event.preventDefault();
                onSubmit();
            }} loading={loading} />
        </form>
    );

}

export default Form;