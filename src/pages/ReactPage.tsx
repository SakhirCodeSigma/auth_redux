import Logo from "../Components/Logo.tsx";
import { Link } from 'react-router-dom'


function ReactPage() {

    return (
        <>
            <Logo/>
            <h1> React Page </h1>
            <p> Welcome to the React Page</p>
            <Link to='/'> Go to Home</Link>


        </>
    )
}

export default ReactPage
