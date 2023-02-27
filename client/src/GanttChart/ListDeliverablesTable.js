import { Link } from 'react-router-dom'
import { fetchDELETE } from '../API/APIUtils.js';
import Button from '../Components/button.js';


const ListDeliverablesTable = ({ data }) => {
    return (
        <div>
            <h3>List of Deliverables</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Members</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map((inst) => (
                        <tr key={inst.id}>
                            <td>{inst.name}</td>
                            <td>{inst.course}</td>
                            <td>{inst.members}</td>
                            <td><Link to={"/group"}>Project Link</Link></td>
                            <Button name={"Delete Project Group"}
                                    buttonFunction={fetchDELETE('/api/deliverables/' + inst.id)} />
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ListPGTable;