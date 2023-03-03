import { useState, useEffect } from 'react';

const EventForm = ({onFieldUpdate, form}) => {
    const handleFieldUpdate = (e) => {
        const key = e.target.id;
        const value = e.target.value;
        onFieldUpdate(key, value)
    }

    //implement multi select or add multiple memebers for project group
    return (
        <form>
            <label for="event-name">Group Name</label>
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
            <p>Members1</p>
            <p>Members2</p>
            <p>Members3</p>
            <p>Members4</p>
        </form>
    )
}

export default EventForm;