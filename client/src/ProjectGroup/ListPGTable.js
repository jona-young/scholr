import { Link } from 'react-router-dom'
import { fetchDELETE } from '../API/APIUtils.js';
import Button from '../Components/button.js';


const ListPGTable = ({ data }) => {
    // return (
    //     <div>
    //         <h3>List of Project Groups</h3>
    //         <table>
    //             <thead>
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Course</th>
    //                     <th>Members</th>
    //                     <th>Link</th>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 { data.map((inst) => (
    //                     <tr key={inst.id}>
    //                         <td>{inst.name}</td>
    //                         <td>{inst.course}</td>
    //                         <td>{inst.members}</td>
    //                         <td><Link to={"/group"}>Project Link</Link></td>
    //                         <Button name={"Delete Project Group"}
    //                                 buttonFunction={fetchDELETE('/api/project-group/' + inst.id)} />
    //                     </tr>
    //                 ))}
    //             </tbody>

    //         </table>
    //     </div>
    // )

    <>
        <h3>Project Groups for [INSERT DATE HERE]</h3>
        <div className="list-container">
            { data.map((inst) => (
                    <Link to={"/group"} key={inst.id}
                        className="list-card">
                        <div>
                            <b>Name</b>
                            {inst.name}
                        </div>
                        <div>
                            <b>Course</b>
                            {inst.course}
                        </div>
                        <div>
                            <b>Members</b>
                            {inst.members}
                        </div>
                        <div>
                            <Button name={"Delete Project Group"}
                                buttonFunction={fetchDELETE('api/project-group/' + inst.id)} />
                        </div>

                    </Link>
            ))}
        </div>
    </>

}

export default ListPGTable;