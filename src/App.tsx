
import './App.css'
import {useLayoutEffect} from 'react'
import Layout from "./Components/Layout";
import { Group, Button, Text} from "@mantine/core";
import {Link} from 'react-router-dom'


function App() {
    useLayoutEffect(() => {
        document.body.style.backgroundImage = `url('https://www.shutterstock.com/image-photo/abstract-white-mat-texture-background-260nw-1574743768.jpg')`;
        document.body.style.backgroundSize = 'cover'
    }, []);

  return (
      <Layout title = {''}>
          <Group justify="center" align="center"  style={{display:"flex", flexDirection:"column"}}>
                  <h1> Welcome to Home page </h1>
                  <Text>Please login to go to Dashboard</Text>
              <Link to='login'><Button w={200} >Login</Button></Link>
          </Group>
      </Layout>
  )
}

export default App
