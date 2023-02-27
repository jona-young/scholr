import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGETByID,fetchPUT, fetchDELETE } from '../API/APIUtils.js';
import PGForm from './PGForm.js';
import Button from '../Components/button.js';

const UpdateDeliverables = () => {
    const { id } = useParams()
    const [ form, setForm ] = useState({})

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    useEffect(() => {
        const response = fetchGETByID('/api/deliverables/' + id);
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
            <h4>Update Project Group</h4>
            <UpdateDeliverables onFieldUpdate={updateState} form={form} />
            <Button name={"Update Deliverable"} 
                    buttonFunction={fetchPUT('/api/deliverables/' + form.id, form)} />
            <Button name={"Delete Deliverable"} 
                    buttonFunction={fetchDELETE('/api/deliverables/' + form.id)} />
        </>
    )
}

export default UpdatePG;