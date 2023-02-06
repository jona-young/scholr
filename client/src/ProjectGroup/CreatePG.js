import { useState } from 'react';
import PGForm from './PGForm.js'
import button from '../Components/button.js'
import {fetchPOST} from '../API/APIUtils.js'

const CreatePG = () => {
    const [ form, setForm ] = useState({});

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    return(
        <>
            <h1>Create Project Group</h1>
            <PGForm onFieldUpdate={updateState} form={form} />
            <button name={"Create Project Group"} buttonFunction={fetchPOST('/api/project-group', form)} />
        </>

    )
}

export default CreatePG;