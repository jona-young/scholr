import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchGETByID,fetchPUT, fetchDELETE } from '../API/APIUtils.js';
import UserForm from './UserForm.js';
import Button from '../Components/button.js';

const Profile = () => {
    const { id } = useParams()
    const [ form, setForm ] = useState({})

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    useEffect(() => {
        const response = fetchGETByID('/api/user/' + id);
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
        <div id="profile-container" className="profile">
            <h2 className="profile-heading">Profile</h2>
            <UserForm onFieldUpdate={updateState} form={form} />
            <Button name={"Update Profile"} 
                    buttonFunction={fetchPUT('/api/user/' + form.id, form)}
                    classname="profile-updatebtn" />
            <Button name={"Delete Account"} 
                    buttonFunction={fetchDELETE('/api/user/' + form.id)} 
                    classname="profile-deletebtn" />
        </div>
    )
}

export default Profile;