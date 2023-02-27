import { useEffect, useState } from 'react';
import CalendarBlocks from "./CalendarBlocks";

const Calendar = () => {
    const [ events, setEvents ] = useState({});

    useEffect(() => {
        setEvents({
            1: {name: "EV1"},
            5: {name: "EV1"},
            6: {name: "EV1"},
            12: {name: "EV1"},
            15: {name: "EV1"},
            16: {name: "EV1"},
            19: {name: "EV1"},
            21: {name: "EV1"},
            27: {name: "EV1"},
            30: {name: "EV1"},
        })
    },[])
    
    return(
        <div id="calendar-container">
            <div id="cal-monday" className="cal-block">
                MON
            </div>
            <div id="cal-tuesday" className="cal-block">
                TUE
            </div>
            <div id="cal-wednesday" className="cal-block">
                WED
            </div>
            <div id="cal-thursday" className="cal-block">
                THU
            </div>
            <div id="cal-friday" className="cal-block">
                FRI
            </div>
            <div id="cal-saturday" className="cal-block">
                SAT
            </div>
            <div id="cal-sunday" className="cal-block">
                SUN
            </div>
            <CalendarBlocks events={events} />
        </div>
    )
}

export default Calendar;