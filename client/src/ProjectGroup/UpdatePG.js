import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGETByID,fetchPUT, fetchDELETE } from '../API/APIUtils.js';
import PGForm from './PGForm.js';
import Button from '../Components/button.js';

const UpdatePG = () => {
    const { id } = useParams()
    const [ form, setForm ] = useState({})

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    useEffect(() => {
        const response = fetchGETByID('/api/project-group/' + id);
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
            <PGForm onFieldUpdate={updateState} form={form} />
            <Button name={"Update Project Group"} 
                    buttonFunction={fetchPUT('/api/project-group/' + form.id, form)} />
            <Button name={"Delete Project Group"} 
                    buttonFunction={fetchDELETE('/api/project-group/' + form.id)} />
        </>
    )
}

export default UpdatePG;