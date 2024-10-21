import {
    Card,
    Center,
    Flex,
    Divider,
    TextInput,
    PasswordInput,
    Button, Select, rem, Text, Anchor, AspectRatio
} from '@mantine/core';
import  { useState } from "react";

import {useForm} from '@mantine/form';
import {AiOutlineCloudDownload} from "react-icons/ai";
import {AiOutlineCloudSync} from "react-icons/ai";
import {AiOutlineDoubleRight, AiOutlineDoubleLeft} from "react-icons/ai";
import {AiOutlineCaretDown} from "react-icons/ai";
import {useLayoutEffect} from 'react'
import Layout from "../../Components/Layout";
import { Alert } from '@mantine/core';
import Axios from "axios"
import {  useNavigate } from "react-router-dom";
import '../../App.css'


function LoginPage() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { name: '', email: '', age: 0 },

        // functions will be used to validate values at corresponding key
        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
        },
    });
    const icon = <AiOutlineCaretDown style={{width: rem(16), height: rem(16)}}/>;

    useLayoutEffect(() => {
        document.body.style.backgroundImage = `url('https://img.freepik.com/free-photo/global-globalization-world-map-environmental-concservation-concept_53876-124164.jpg?w=1380&t=st=1725255172~exp=1725255772~hmac=4bdf6121e8e6aadd0bd3ca3778a07e991f0166aa37624ca25b1c856a52a310ad')`;
    }, []);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alertTitle, setAlertTitle] = useState("");
    const [variant, setVariant] = useState("transparent");
    const [color, setColor] = useState("");
    const navigate = useNavigate();

    const   handleSubmit = (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        Axios.post("http://localhost:3004/login", {
            email,
            password,
        })
            .then((response) => {
                console.log("status", response.data.status)
                if (response.data.status === 200){
                    alert("Login successfully");
                    setAlertTitle("Login successfully");
                    setVariant("light")
                    setColor("green")
                    navigate("/");

                }else{
                    console.log("Error")
                    setAlertTitle("Email does not exist");
                    setVariant("light")
                    setColor("red")
                    navigate("/login");
                }
            })
            .catch((error) => {
                console.log('error is here')
                console.log(error);
            });
        console.log("Handle button Clicked");
    };
    return (
        <Layout title = {''}>

        <Center>
            <Card style={{width:"430px", opacity:"0.9"}}>
                <Card.Section withBorder inheritPadding py="xs" style={{backgroundColor:"#d7d7d7"}}>
                    <Center>
                        <Text>
                            Account Login
                            {/*<Translation>{t => <ChangeLang t={t} />}</Translation>*/}
                        </Text>
                    </Center>
                </Card.Section>
                <Card.Section py="xs" mt={40}>
                    <Alert title={alertTitle}  variant ={variant} color ={color}/>
                    <AspectRatio ratio={5 / 2} maw={150} mx="auto">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Prozorro.Sale_logo_en.png"
                            alt="Panda"
                        />
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
                                    placeholder="Email"
                                    key={form.key('email')}
                                    {...form.getInputProps('email')}
                                    onChange={(e) => setEmail(e.target.value)}
                                />

                                <PasswordInput
                                    mt="sm"
                                    label="Password"
                                    placeholder="Password"
                                    key={form.key('confirmPassword')}
                                    {...form.getInputProps('confirmPassword')}
                                    onChange={(e) => setPassword(e.target.value)}
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
                                rightSection={icon}
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
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkD2TROKcvLLnAh279xpe2PFqrcmvuN7KJCg&s"
                                    alt="Panda"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                <img
                                    src="https://i.pinimg.com/736x/3d/6a/2a/3d6a2ad56bc3403c5cfcc3efe09b741b.jpg"
                                    alt="Panda"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpQr7jRfGRZXz54j5HdGf6MDP8w5l53a3UQ&s"
                                    alt="Panda"
                                />
                            </AspectRatio>
                            <AspectRatio ratio={2 / 3} maw={20} mx="4px">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Linux_logo.jpg"
                                    alt="Panda"
                                />
                            </AspectRatio>
                        </Flex>
                    </Flex>
                </Card.Section>
            </Card>
        </Center>
        </Layout>
    );
}

export default LoginPage