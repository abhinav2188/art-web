import React, { useEffect, useState } from "react";
import ActionButton from "../../../components/button/ActionButton";
import { deleteDropdownValue, getDropdownKeys, getDropdownValues, postDropdownValue } from "../../../services/dropdownService";

const DropdownsPanel = (props) => {

    const [dropdownKeys, setDropdownKeys] = useState([]);

    useEffect(() => {
        getDropdownKeys().then(
            response => {
                if (response)
                    setDropdownKeys(response.keys);
            }
        )
    }, [])

    const [dropdownData, setDropdownData] = useState({
        key: "",
        values: []
    });

    useEffect(() => {
        if (dropdownData.key)
            getDropdownValues(dropdownData.key, null, null)
                .then(response => {
                    console.log(response.dropdownKeyDetailsMap[dropdownData.key].values);
                    const dropdownValues = response.dropdownKeyDetailsMap[dropdownData.key].values;
                    setDropdownData(prevState => ({
                        ...prevState,
                        values: dropdownValues
                    }));
                })
    }, [dropdownData.key])


    const [addDropdownValueData, setAddDropdownValueData] = useState({
        key: "",
        value: "",
        order: ""
    });

    const [valueSaveProgress, setValueSaveProgress] = useState(false);

    function handleChange2(event) {
        let name = event.target.name;
        let value = event.target.value;
        // console.log("handleChange(" + name + "," + value + ")");
        setAddDropdownValueData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        // console.log("handleChange(" + name + "," + value + ")");
        setDropdownData(prevState => ({
            ...prevState,
            [name]: value
        }))
        if (name == "key")
            setAddDropdownValueData(prevState => ({
                ...prevState,
                key: value
            }));
    }


    function addDropdownValue() {
        setValueSaveProgress(true);
        postDropdownValue(addDropdownValueData).then(
            response => {
                console.log(response);
                setDropdownData(prevState => ({
                    ...prevState,
                    values: [
                        ...prevState.values,
                        response
                    ]
                }));
                setValueSaveProgress(false);
            }
        );
    }

    return (
        <div>
            <h3>Dropdowns Panel</h3>
            <select name="key" value={dropdownData.key} onChange={handleChange}>
                <option disabled selected value=""> -- select an option -- </option>
                {
                    dropdownKeys.map((d, i) =>
                        <option key={i} value={d.dropdownKey}>{d.dropdownKey + " --form: " + d.formType}</option>
                    )
                }
            </select>
            <table>
                <thead className="text-bold">
                    <tr>
                        <td>Value</td>
                        <td>Order</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        dropdownData.values.map(dropdownVal =>
                            <DropdownValue id={dropdownVal.id} key={dropdownVal.id} value={dropdownVal.value}
                                valueOrder={dropdownVal.valueOrder} setDropdownData={setDropdownData} />
                        )
                    }
                    <tr>
                        <td><input name="value" value={addDropdownValueData.value} onChange={handleChange2} /></td>
                        <td><input name="order" value={addDropdownValueData.order} onChange={handleChange2} /></td>
                        <td>
                            <ActionButton loading={valueSaveProgress} onClick={addDropdownValue}>Add</ActionButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const DropdownValue = (props) => {
    const [valueDeleteProgress, setValueDeleteProgress] = useState(false);
    function deleteValue() {
        setValueDeleteProgress(true);
        deleteDropdownValue(props.id).then(
            response => {
                console.log(response);
                setValueDeleteProgress(false);
                props.setDropdownData(prevState => ({
                    ...prevState,
                    values: prevState.values.filter(value => value.id != props.id)
                }))
            }
        )
    }
    return (
        <tr key={props.id}>
            <td>{props.value}</td>
            <td>{props.valueOrder}</td>
            <td>
                <ActionButton loading={valueDeleteProgress} onClick={deleteValue}>Delete</ActionButton>
            </td>
        </tr>

    )
}

export default DropdownsPanel;