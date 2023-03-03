import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGETByID,fetchPUT, fetchDELETE } from '../API/APIUtils.js';
import EventForm from './EventForm.js';
import Button from '../Components/button.js';

const UpdateEvent = () => {
    const { id } = useParams()
    const [ form, setForm ] = useState({})

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    useEffect(() => {
        const response = fetchGETByID('/api/calendar-event/' + id);
        if (!response.errors)
        {
            setForm(response);
        }
        else
        {
            console.log('form returned errors: ', response.errors)
        }
    },[])

    return(
        <>
            <h4>Update Calendar Event</h4>
            <EventForm onFieldUpdate={updateState} form={form} />
            <Button name={"Update Project Group"} 
                    buttonFunction={fetchPUT('/api/calendar-event/' + form.id, form)} />
            <Button name={"Delete Project Group"} 
                    buttonFunction={fetchDELETE('/api/calendar-event/' + form.id)} />
        </>
    )
}

export default UpdateEvent;