import Logo from "../Components/Logo.tsx";
// import { Button, Checkbox, Group, TextInput } from '@mantine/core';
// import { useForm } from '@mantine/form';
import {Link} from "react-router-dom";



function VitePage() {
    // const form = useForm({
    //     mode: 'uncontrolled',
    //     initialValues: {
    //         email: '',
    //         termsOfService: false,
    //     },
    //
    //     validate: {
    //         email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    //     },
    // });
    return (
        <>
            <Logo/>
            <h1> Vite Page </h1>
            <p> Welcome to the Vite Page</p>
            <Link to='/'> Go to Home</Link>

        </>
    )
}

export default VitePage
