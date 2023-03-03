import { useState } from 'react';
import EventForm from './EventForm.js'
import Button from '../Components/button.js'
import {fetchPOST} from '../API/APIUtils.js'

const CreateEvent = () => {
    const [ form, setForm ] = useState({});

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    return(
        <>
            <h4>Create Calendar Event</h4>
            <EventForm onFieldUpdate={updateState} form={form} />
            <Button name={"Create Calendar Event"} 
                    buttonFunction={fetchPOST('/api/calendar-event', form)} />
        </>

    )
}

export default CreateEvent;