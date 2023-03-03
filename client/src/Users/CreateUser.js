import { useState } from 'react';
import Button from '../Components/button.js'
import {fetchPOST} from '../API/APIUtils.js'

const CreateUser = () => {
    const [ form, setForm ] = useState({});

    // update state function of form
    const updateState = (key, value) => {
        setForm({...form, [key]: value})
    }

    const handleFieldUpdate = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        updateState(key, value)
    }

    return(
        <>
            <h4>Sign Up!</h4>
            <label for="pg-name">Username</label>
                <input type="text"
                            id="username" 
                            className="form-medium" 
                            onChange={ handleFieldUpdate }
                            value={form.username} /> 
                <label for="description">Password</label>
                <input type="text"
                        id="password"
                        className="form-medium"
                        onChange={ handleFieldUpdate }
                        value={form.password} />
                <label for="description">Confirm Password</label>
                <input type="text"
                        id="password2"
                        className="form-medium"
                        onChange={ handleFieldUpdate }
                        value={form.password2} />
            <Button name={"Create User"} 
                    buttonFunction={fetchPOST('/api/user-create', form)} />
        </>

    )
}

export default CreateUser;