import { useState, useEffect } from 'react';

const UserForm = ({onFieldUpdate, form}) => {
    const handleFieldUpdate = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        onFieldUpdate(key, value)
    }

    //implement multi select or add multiple memebers for project group
    return (
        <form>
            <label for="pg-name">Username</label>
            <input type="text"
                        id="username" 
                        className="form-medium" 
                        onChange={ handleFieldUpdate }
                        value={form.username} /> 
            <label for="description">Name</label>
            <input type="text"
                    id="name"
                    className="form-medium"
                    onChange={ handleFieldUpdate }
                    value={form.name} />
            <label for="description">Groups</label>
            <input type="text"
                    id="groups"
                    className="form-medium"
                    onChange={ handleFieldUpdate }
                    value={form.groups} />
        </form>
    )
}

export default UserForm;