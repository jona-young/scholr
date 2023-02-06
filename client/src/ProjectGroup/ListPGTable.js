import { Link } from 'react-router-dom'

const ListPGTable = ({ data }) => {
    console.log("ListPGTable: ",data)
    return (
        <div>
            <h3>List of Project Groups</h3>
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
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    )
}

export default ListPGTable;