import { Link } from 'react-router-dom'
import { fetchDELETE } from '../API/APIUtils.js';
import Button from '../Components/button.js';


const ListCalEventsTable = ({ data }) => {
    return (
        <>
            <h3>Calendar Events for [INSERT DATE HERE]</h3>
            <div className="list-container">
                { data.map((inst) => (
                        <Link to={"/event"} key={inst.id}
                             className="list-card">
                            <div>
                                <b>Event</b>
                                {inst.event}
                            </div>
                            <div>
                                <b>Date</b>
                                {inst.date}
                            </div>
                            <div>
                                <b>Time</b>
                                {inst.time}
                            </div>
                            <div>
                                <b>Description</b>
                                {inst.description}
                            </div>
                            <div>
                                <Button name={"Delete Project Group"}
                                    buttonFunction={fetchDELETE('api/event/' + inst.id)} />
                            </div>

                        </Link>
                ))}
          </div>
        </>
    )
}

export default ListCalEventsTable;