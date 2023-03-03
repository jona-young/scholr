import { useState, useEffect } from 'react';

const CalendarEvent = ({ data }) => {
    const [ event, setEvent ] = useState({})

    useEffect(() => {
        setEvent({
            id: "11111",
            event: "projgroup 1", 
            date: "FPOP101",
            time: "FPOP101",
            description: "FPOP101"
        })
    }, [])

    return (
        <div className="main-pane content-pane">
            <span>{event.event}</span>
            <span>{event.date}</span>
            <span>{event.time}</span>
            <span>{event.description}</span>
        </div>
    )
}

export default CalendarEvent;