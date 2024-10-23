import React, { useState } from 'react';
import {Navigate, useNavigate} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux';


import { login } from '../../redux/slices/authSlice.tsx';
import Layout from "../../Components/Layout.tsx";
import {
    Anchor,
    AspectRatio,
    Button,
    Card,
    Center,
    Divider,
    Flex, Image,
    PasswordInput,
    Select,
    Text,
    TextInput
} from "@mantine/core";
import {AiOutlineCloudDownload, AiOutlineCloudSync, AiOutlineDoubleLeft, AiOutlineDoubleRight} from "react-icons/ai";
import {RootState} from "../../redux/store.tsx"; // Assuming you have an authSlice

function Login() {
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        dispatch(login({ email, password }));
        navigate('/dashboard')
    };

    return (

             (!isAuthenticated) ? <Layout title = {''}><Center><Card style={{width:"430px", opacity:"0.9"}} withBorder>
                    <Card.Section withBorder inheritPadding py="xs" style={{backgroundColor:"#d7d7d7"}}>
                        <Center>
                            <Text>
                                Account Login
                            </Text>
                        </Center>
                    </Card.Section>
                    <Card.Section py="xs" mt={40}>
                        <AspectRatio ratio={5 / 2} maw={150} mx="auto">
                            <Image
                                src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Prozorro.Sale_logo_en.png"
                                alt="Panda"
                            >
                            </Image>
                        </AspectRatio>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs" style={{opacity: "0.9"}}>
                        <Center style={{borderRadius: "10px"}}>
                            <Flex
                                gap="md"
                                justify="center"
                                align="center"
                                direction="column"
                                wrap="nowrap"
                            >

                                <form onSubmit={handleSubmit} method="post">
                                    <TextInput
                                        label="Email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />

                                    <PasswordInput
                                        mt="sm"
                                        label="Password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />

                                    <Button type ="submit" mt="sm" miw = {350} >
                                        Submit
                                    </Button>
                                </form>
                                <Flex gap="md"
                                      justify="center"
                                      align="center"
                                      direction="row">
                                    <AiOutlineCloudDownload size={42} style={{
                                        border: "black 1px solid",
                                        padding: "10px",
                                        borderRadius: "8px"
                                    }}/>
                                    <AiOutlineCloudSync size={42} style={{
                                        border: "black 1px solid",
                                        padding: "10px",
                                        borderRadius: "8px"
                                    }}/>
                                </Flex>


                                <Select
                                    mt="lg"
                                    mb="md"
                                    placeholder="Pick Language"
                                    data={['English', 'Hindi', 'Arabic', 'Germany']}
                                    defaultValue="English"
                                    allowDeselect={false}
                                />
                            </Flex>
                            <Divider/>

                        </Center>


                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs">
                        <Flex gap="md"
                              justify="space-around"
                              align="center"
                              direction="row">
                            <Anchor href="https://mantine.dev/" target="_blank">
                                <AiOutlineDoubleLeft style={{marginRight: '5px'}}/>
                                Forgot Password ?
                            </Anchor>
                            <Anchor href="https://mantine.dev/" target="_blank">
                                Create a new account
                                <AiOutlineDoubleRight style={{marginLeft: '5px'}}/>
                            </Anchor>

                        </Flex>
                    </Card.Section>
                    <Card.Section withBorder inheritPadding py="xs" style={{backgroundColor:"#d7d7d7"}}>
                        <Flex gap="md"
                              justify="center"
                              align="center"
                              direction="row">
                            <Text>
                                Download Apps
                            </Text>
                            <Flex>
                                <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD2TROKcvLLnAh279xpe2PFqrcmvuN7KJCg&s"
                                        alt="Panda"
                                    ></Image>
                                </AspectRatio>
                                <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                    <Image
                                        src="https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg"
                                        alt="Panda"
                                    ></Image>
                                </AspectRatio>
                                <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                    <Image
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpQr7jRfGRZXz54j5HdGf6MDP8w5l53a3UQ&s"
                                        alt="Panda"
                                    ></Image>
                                </AspectRatio>
                                <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
                                        alt="Panda"
                                    ></Image>
                                </AspectRatio>
                            </Flex>
                        </Flex>
                    </Card.Section>
                </Card></Center></Layout> : <Navigate to='/dashboard'></Navigate>

    );
}

export default Login;