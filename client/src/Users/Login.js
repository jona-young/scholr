import { useState, useEffect } from 'react';
import Button from '../Components/button.js';
import { fetchPOST } from '../API/APIUtils.js';

const Login = ({onFieldUpdate, form}) => {
    const [ login, setLogin ] = useState({
        username: "",
        password: ""
    })

    const handleFieldUpdate = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        setLogin({...login, [key]: value})
    }

    //implement multi select or add multiple memebers for project group
    return (
        <>
            <h4>Login</h4>
            <form>
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
            </form>
            <Button name={"Create User"} 
                    buttonFunction={fetchPOST('/api/user', form)} />        </>

    )
}

export default Login;