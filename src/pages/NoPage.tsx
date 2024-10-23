import {AspectRatio, Center, Text, Group, Image} from '@mantine/core';
import {Link} from "react-router-dom";

function NoPage() {

    return (
        <>

            <AspectRatio ratio={1080 / 720} maw={300} mx="auto">
                <Image
                    src="https://img.freepik.com/premium-vector/404-page-with-cartoon-screen-alien-robot-network-fail-problem-message-web-site-construction-sign-webpage-loading-error-warning-vector-banner-with-funny-robot-droid-smoking-character_8071-55354.jpg"
                    alt="Panda"
                />
            </AspectRatio>
            <Center>
                <Group style={{display: "flex",flexDirection: "column"}}>
                    <Text size='64px' c='red' fw='bold'> Error 404 </Text>
                    <Text size='24px' c='red' fw='bold'> Page not found.  </Text>
                    <Link to='/dashboard'> Go to Dashboard</Link>
                </Group>
            </Center>
        </>
    )
}

export default NoPage
