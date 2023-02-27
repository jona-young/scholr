import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Error. We are sorry for the inconvenience. Click here to go back home!
            <Link to={"/"}>Home</Link>
        </div>
    )
}

export default ErrorPage;