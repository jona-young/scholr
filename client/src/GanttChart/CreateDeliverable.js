import { useState } from 'react';
import DeliverablesForm from './DeliverablesForm.js'
import Button from '../Components/button.js'
import {fetchPOST} from '../API/APIUtils.js'

const CreateDeliverable = () => {
    const [ form, setForm ] = useState({});

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    return(
        <>
            <h4>Create Deliverable</h4>
            <DeliverablesForm onFieldUpdate={updateState} form={form} />
            <Button name={"Create Deliverable"} 
                    buttonFunction={fetchPOST('/api/deliverable', form)} />
        </>

    )
}

export default CreateDeliverable;