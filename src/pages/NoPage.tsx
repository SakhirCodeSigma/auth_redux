import { AspectRatio } from '@mantine/core';
import {Link} from "react-router-dom";

function NoPage() {

    return (
        <>

            <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
                <img
                    src="https://img.freepik.com/premium-vector/404-page-with-cartoon-screen-alien-robot-network-fail-problem-message-web-site-construction-sign-webpage-loading-error-warning-vector-banner-with-funny-robot-droid-smoking-character_8071-55354.jpg"
                    alt="Panda"
                />
            </AspectRatio>
            <h1> Error 404</h1>
            <p> Page Not Found</p>
            <Link to='/'> Go to Home</Link>
        </>
    )
}

export default NoPage
