import React from "react";
import SubmitButton from "./button/SubmitButton";
import BoolSelectInput from "./input/BoolSelectInput";
import DateInput from "./input/DateInput";
import NumberInput from "./input/NumberInput";
import SelectInput from "./input/SelectInput";
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

const CustomInput = ({ field, value, handleChange, dropdowns }) => {
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
                <SelectInput label={field.label} name={field.name} onChange={handleChange} value={value} optionsList={dropdowns[field.dropdownType].values} />
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


const Form = ({ fields, handleChange, onSubmit, formData, loading, dropdowns }) => {

    return (
        <form>
            {
                fields.map(field =>
                    <CustomInput field={field} value={formData[field.name]} handleChange={handleChange} dropdowns={dropdowns} />
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