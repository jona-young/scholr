import { useState } from 'react';
import PGForm from './PGForm.js'
import Button from '../Components/button.js'
import {fetchPOST} from '../API/APIUtils.js'

const CreatePG = () => {
    const [ form, setForm ] = useState({});

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    return(
        <>
            <h4>Create Project Group</h4>
            <PGForm onFieldUpdate={updateState} form={form} />
            <Button name={"Create Project Group"} 
                    buttonFunction={fetchPOST('/api/project-group', form)}
                    className="profile-updatebtn" />
        </>

    )
}

export default CreatePG;