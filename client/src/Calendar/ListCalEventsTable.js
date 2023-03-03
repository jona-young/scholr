import { Link } from 'react-router-dom'
import { fetchDELETE } from '../API/APIUtils.js';
import Button from '../Components/button.js';


const ListCalEventsTable = ({ data }) => {
    return (
        <div>
            <h3>Calendar Events for [INSERT DATE HERE]</h3>
            <table>
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((inst) => (
                        <tr key={inst.id}>
                            <td>{inst.event}</td>
                            <td>{inst.date}</td>
                            <td>{inst.time}</td>
                            <td>{inst.description}</td>
                            <td><Link to={"/event"}>Event</Link></td>
                            <Button name={"Delete Project Group"}
                                    buttonFunction={fetchDELETE('/api/project-group/' + inst.id)} />
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ListCalEventsTable;