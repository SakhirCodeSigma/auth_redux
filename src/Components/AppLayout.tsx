import {AppShell, Burger, Group, Card, Flex, AspectRatio, Space} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import React, {FC, useState} from 'react';
import {
    IconLogout,
    IconCreditCardRefund,
    IconClipboardText,
    IconScale,
    IconUserFilled,
    IconWorld,
    IconDeviceDesktop,
    IconReportSearch,
    IconClockBolt,
    IconUsers,
    IconCalendarEvent,
    IconCloudPause,
    IconBuildingWarehouse,
    IconBrandKick,
} from '@tabler/icons-react';
import {Box, NavLink, Stack, Button, Grid, Text} from '@mantine/core';
import {BiShoppingBag} from "react-icons/bi";
import {AiFillDelete} from "react-icons/ai";
// import {AiOutlineClose} from "react-icons/ai";
import {BiEdit} from "react-icons/bi";


interface AppLayoutProps {
    children: React.ReactNode;
    title: string;
}

const data = [
    {icon: IconDeviceDesktop, label: 'BackOffice'},
    {icon: IconScale, label: 'Sales'},
    {icon: IconUsers, label: 'Customers'},
    {icon: IconCalendarEvent, label: 'Appointments'},
    {icon: IconCloudPause, label: 'Close Day'},
    {icon: IconBuildingWarehouse, label: 'Inventory'},
    {icon: IconBrandKick, label: 'Kicker Point'},
    {icon: IconReportSearch, label: 'Reports'},
    {icon: IconClockBolt, label: 'Clockin'},
    {icon: IconUserFilled, label: 'Employees'},
    {icon: IconWorld, label: 'Websites'},
    {icon: IconCreditCardRefund, label: 'Feedback'},
    {icon: IconClipboardText, label: 'Suggestion'},
    {icon: IconLogout, label: 'Logout'},
];
const AppLayout: FC<AppLayoutProps> = ({children}) => {
    const [mobileOpened, {toggle: toggleMobile}] = useDisclosure();
    const [desktopOpened, {toggle: toggleDesktop}] = useDisclosure(true);

    const [mobile, {toggle:mobileToggle}] = useDisclosure()
    const [desktop, {toggle:desktopToggle}] = useDisclosure(true)

    const [active, setActive] = useState(0);
    const items = data.map((item, index) => (
        <NavLink
            href="#required-for-focus"
            key={item.label}
            active={index === active}
            label={item.label}
            // description={item.description}
            // rightSection={item.rightSection}
            leftSection={<item.icon size="1rem" stroke={1.5}/>}
            onClick={() => setActive(index)}
            color="cyan"
            style={{height: "35px"}}
        />))
    return (
        <AppShell
            header={{ height: { base: 60, md: 70, lg: 60 } }}
            navbar={{
                width: 150,
                breakpoint: 'sm',
                collapsed: {mobile: !mobileOpened, desktop: !desktopOpened},
            }}
            aside={{ width: 450, breakpoint: 'lg', collapsed: { mobile: !mobile, desktop: !desktop } }}
            // aside={{ width: { base: 1000, md: 300, lg: 450 } , breakpoint: 'md', collapsed: {desktop: false, mobile: true}}}
            padding="md"
        >
            <AppShell.Header>
                <Flex
                    direction='row'
                    justify='space-between'
                    align="center"
                    mih={60}

                >
                    <Group h="100%" px="md" >

                        <Text>SALE.PRO</Text>
                        <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />

                    </Group>

                    <Group>
                        <Burger opened={mobile} onClick={mobileToggle} hiddenFrom="sm" size="sm" />
                        <Burger opened={desktop} onClick={desktopToggle} visibleFrom="sm" size="sm" />
                    </Group>
                </Flex>

            </AppShell.Header>
            <AppShell.Navbar style={{width: "150px"}}>
                <Box w={150}>{items}</Box>
                <Space h="xl" />
                <Box>
                    <Group justify="center" grow>
                        <Button variant="default">First</Button>
                        <Button variant="default">Second</Button>
                        <Button variant="default">Third</Button>
                    </Group>
                </Box>
            </AppShell.Navbar>
            <AppShell.Main style={{backgroundColor: "#f5f5f5",}}>
                {children}
            </AppShell.Main>
            <AppShell.Aside>
                <Card>
                    <Card.Section style={{backgroundColor: "#d7d7d7"}}>
                        <Flex justify="space-between"
                              mih={50}
                              px={20}
                              align="center">
                            <Group h="100%" px="md" justify="space-around" style={{width: '60%'}}>
                                <AiFillDelete/>
                                <Flex justify="center"
                                      align="center">
                                    <BiShoppingBag/>
                                    Sale Content
                                </Flex>
                            </Group>
                        </Flex>

                    </Card.Section>
                    <Card.Section style={{height: "240px"}} withBorder>
                        <Stack
                            mah={300}
                            bg="var(--mantine-color-body)"
                            align="stretch"
                            justify="flex-start"
                            gap="md"
                        >


                            <Grid>
                                <Grid.Col span={8} h={60}>
                                    <Group justify="space-around">
                                        <Group>
                                            <AspectRatio maw={40} mx="auto" p={6}>
                                                <img
                                                    src="https://www.shutterstock.com/image-vector/vector-motorbike-wheel-spare-parts-600nw-2281803129.jpg"
                                                    alt="Panda"
                                                />
                                            </AspectRatio>
                                            <Flex direction={"column"}>
                                                <Text> Birch Gadget</Text>
                                                <Text>1-61</Text>
                                            </Flex>
                                        </Group>
                                        <Text>61</Text>


                                    </Group>
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <Flex
                                    >
                                        <Button variant='transparent' color='blue'><BiEdit size={20}/></Button>
                                        <Button variant='transparent' color='red'><AiFillDelete size={20}/></Button>
                                    </Flex>
                                </Grid.Col>
                            </Grid>
                            <Grid>
                                <Grid.Col span={8} h={60}>
                                    <Group justify="space-around">
                                        <Group>
                                            <AspectRatio maw={40} mx="auto" p={6}>
                                                <img
                                                    src="https://www.shutterstock.com/image-vector/vector-motorcycle-spares-concept-260nw-341409191.jpg"
                                                    alt="Panda"
                                                />
                                            </AspectRatio>
                                            <Flex direction={"column"}>
                                                <Text> Bike Parts </Text>
                                                <Text>1-7000</Text>
                                            </Flex>
                                        </Group>
                                        <Text>7000</Text>


                                    </Group>
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <Flex>
                                        <Button variant='transparent' color='blue'><BiEdit size={20}/></Button>
                                        <Button variant='transparent' color='red'><AiFillDelete size={20}/></Button>
                                    </Flex>
                                </Grid.Col>
                            </Grid>
                        </Stack>
                    </Card.Section>
                    <Card.Section  withBorder>

                        <Grid>
                            <Grid.Col p={4} span={{base: 6, md: 6, lg: 6}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>ASSIGN EMPLOYEE</Text>
                                    
                                </Button>
                            </Grid.Col>
                            <Grid.Col p={4} span={{base: 6, md: 6, lg: 6}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>ASSIGN CUSTOMER</Text>
                                </Button>
                            </Grid.Col>

                        </Grid>
                        <Grid px={8}>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                                                             fullWidth variant="white" color='primary'>
                                <Text size='8' fw={500}>SALE ON HOLD</Text>
                                 </Button>
                            </Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}><Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                                                             fullWidth variant="white" color='primary'>
                                <Text size='8' fw={500}>LOAD SALE</Text>
                            </Button></Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>SHIPPING'S</Text>

                                </Button>
                            </Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>BUSINESS CARD</Text>

                                </Button>
                            </Grid.Col>
                        </Grid>
                        <Grid pl={20}>
                            <Grid.Col span={{base: 12, md: 6, lg: 5}}>
                                <Button size='compact-md' style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>GIFT CARD</Text>
                                </Button>
                                <Group justify="center" gap="xs" grow pt={10}>
                                    <Button size='compact-xs' style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                            fullWidth variant="white" color='primary'>
                                        <Text size='8' fw={500}>APPLY</Text>
                                    </Button>
                                    <Button size='compact-xs' style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                            fullWidth variant="white" color='primary'>
                                        <Text size='8' fw={500}>CREATE</Text>
                                    </Button>
                                </Group>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 6, lg: 3}}>
                                <Button h={70} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>CUSTOM DEAL</Text>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={{base: 12, md: 6, lg: 3}}>
                                <Button h={70} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>DISCOUNT</Text>
                                </Button>
                            </Grid.Col>
                        </Grid>
                        <Grid px={8}>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>OPEN DRAWER</Text>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}><Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                                                             fullWidth variant="white" color='primary'>
                                <Text size='8' fw={500}>EXCHANGE</Text>
                            </Button></Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>LAYAWAY</Text>
                                </Button>
                            </Grid.Col>
                            <Grid.Col span={{base: 6, md: 4, lg: 3}}>
                                <Button h={50} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                        fullWidth variant="white" color='primary'>
                                    <Text size='8' fw={500}>REFUND</Text>
                                </Button>
                            </Grid.Col>
                        </Grid>
                    </Card.Section>
                    <Card.Section>
                        <Grid grow p={6}>
                            <Grid.Col span={7} >
                                <Stack
                                    bg="var(--mantine-color-body)"
                                    align="stretch"
                                    justify="flex-start"
                                    gap='6px'
                                >
                                    <Button h={30} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                            fullWidth variant="light" color='primary'>
                                        <Group >
                                            <Text size='12' fw={500}>DISCOUNT</Text>
                                            <Text size='12' fw={500}>0.00</Text>
                                        </Group>
                                    </Button>
                                    <Button h={30} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}} radius={0}
                                            fullWidth variant="light" color='primary'>
                                        <Group >
                                            <Text size='12' fw={500}>SUB TOTAL</Text>
                                            <Text size='12' fw={500}>5740.00</Text>
                                        </Group>
                                    </Button>
                                    <Button h={30} style={{boxShadow: " 0px 2px 4px rgba(0, 0, 0, 0.2)"}}
                                                      radius={0}
                                                      fullWidth variant="light" color='primary'>
                                        <Group >
                                            <Text size='12' fw={500}>TAX(23%)</Text>
                                            <Text size='12' fw={500}>1320.25</Text>
                                        </Group>
                                </Button>
                                </Stack></Grid.Col>
                            <Grid.Col span={5}>
                                <Button variant="filled" color='green' fullWidth h={50} >CHECK TOTAL</Button>
                                <AspectRatio ratio={4 / 2} maw={100} mx="auto" p={6}>
                                    <img
                                        src="https://pngimg.com/d/barcode_PNG30.png"
                                        alt="Panda"
                                    />
                                </AspectRatio>
                            </Grid.Col>
                        </Grid>
                    </Card.Section>
                </Card></AppShell.Aside>
        </AppShell>
    );
}

export default AppLayout;