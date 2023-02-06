import { Link } from 'react-router-dom';

const NoProjectGroup = () => {
    return (
        <div>
            No Project Group, please click here to create a project group
            <Link to={"/create-pg"}>Create Project</Link>
        </div>
    )
}

export default NoProjectGroup;