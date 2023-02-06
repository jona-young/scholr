import { useState, useEffect } from 'react';

const PGForm = ({onFieldUpdate, form}) => {
    const handleFieldUpdate = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        onFieldUpdate(key, value)
    }

    //implement multi select or add multiple memebers for project group
    return (
        <form>
            <label for="pg-name">Group Name</label>
            <input type="text"
                        id="name" 
                        className="form-medium" 
                        onChange={ handleFieldUpdate }
                        value={form.name} /> 
            <label for="description">Description</label>
            <input type="text" 
                        id="description"
                        className="form-medium" 
                        onChange={ handleFieldUpdate }
                        value={form.name} /> 
            <label for="members">Members</label>


        </form>
    )
}

export default PGForm;