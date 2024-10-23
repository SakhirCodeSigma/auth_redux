
import { useDispatch } from 'react-redux';
import {Image, SimpleGrid, Card, Text, Select, TextInput, Group, rem, Box, Flex, Button, Grid} from '@mantine/core';
import {BiPlusCircle, BiSearchAlt2} from "react-icons/bi";
import AppLayout from "../Components/AppLayout.tsx"
import {logout} from "../redux/slices/authSlice.tsx";
import {useNavigate} from "react-router-dom";


const images = [
    'https://www.shutterstock.com/image-vector/vector-motorbike-wheel-spare-parts-600nw-2281803129.jpg',
    'https://www.shutterstock.com/image-vector/vector-retro-motorcycle-wheel-spares-600nw-2251386793.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_tlnt4-JzWTBJJW8AIewNqb636Y-3qi6vR0fGb4FQLzL7UFGMxPta_9B6w99B27gqe8M&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHoSaazd0t36xqn2VqfnEsW0Y_D3JeKPm7wwcpPdtzSvEaLqnws00VN3Z3zDpL-eUq-c&usqp=CAU',
    'https://www.shutterstock.com/shutterstock/photos/341409191/display_1500/stock-vector-vector-motorcycle-spares-concept-341409191.jpg',
    'https://www.shutterstock.com/shutterstock/photos/341409191/display_1500/stock-vector-vector-motorcycle-spares-concept-341409191.jpg',

    'https://www.shutterstock.com/image-vector/vector-motorbike-wheel-spare-parts-600nw-2281803129.jpg',
    'https://www.shutterstock.com/image-vector/vector-retro-motorcycle-wheel-spares-600nw-2251386793.jpg',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://www.shutterstock.com/image-vector/vector-motorbike-concept-spares-isolated-260nw-2275776625.jpg',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
    'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];
function Dashboard() {
    const icon = <BiSearchAlt2 style={{ width: rem(16), height: rem(16) }} />;
    const dispatch = useDispatch();
const navigate = useNavigate();
    function handleClick() {
        dispatch(logout());
        navigate('/login')
    }

    return (
        <AppLayout title = {''}>
        <Card>
            <Card.Section style={{padding: '1rem'}} withBorder>
                <Box style={{display:"flex", justifyContent:"space-between"}}>
                    <Group justify='space-between' w='100%'>
                       <Grid>
                           <Grid.Col span={{xs:12, sm:6}}>
                           <Select
                               placeholder="All Products"
                               data={['React', 'Angular', 'Vue', 'Svelte']}
                               allowDeselect={false}
                           />
                           </Grid.Col>
                           <Grid.Col span={{xs:12, sm:6}}>
                           <TextInput
                               leftSectionPointerEvents="none"
                               leftSection={icon}
                               placeholder="Search Here"
                           />
                           </Grid.Col>

                       </Grid>
                        <Button color='red' onClick={handleClick}>Logout</Button>
                    </Group>
                </Box>
            </Card.Section>
            <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid cols={{ xs:3, sm: 4, lg: 4}}>
                    {images.map((image) => (
                        <Card shadow="sm" radius="md" withBorder>
                            <Group justify="center" gap="lg"    >
                                <Flex direction='column' align='center' >

                                    <Flex
                                        justify="center"
                                        align="center"
                                        direction="row"
                                        px={100}
                                    >
                                        <Text>BETA GADGET</Text>
                                    </Flex><Flex
                                        h={100}
                                        w={200}
                                        gap="md"
                                        justify="center"
                                        align="center"
                                        direction="row"
                                        p={10}
                                    >
                                        <Image src={image} key={image} radius="sm" h='100%'/>
                                    </Flex>
                                    <BiPlusCircle size={30}/>
                                </Flex>

                            </Group>

                        </Card>
                    ))}
                </SimpleGrid>
            </Card.Section>
        </Card>
        </AppLayout>
    )
}

export default Dashboard
