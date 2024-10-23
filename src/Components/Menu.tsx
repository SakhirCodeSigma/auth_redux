import { Link } from 'react-router-dom'
import '../App.css'
import {Flex, Group} from '@mantine/core';


function Menu() {

    return (
        <Group>
        <Flex
            direction={{ base: 'column', sm: 'row' }}
            gap={{ base: 'sm', sm: 'lg' }}
            justify={{ sm: 'center' }}
        >
            <Link to='/'> Home </Link>
            <Link to='/test'>Testing</Link>
            <Link to='/login'> Login </Link>
            <Link to='/layout'>Layout</Link>
        </Flex>
        </Group>

    )
}

export default Menu
