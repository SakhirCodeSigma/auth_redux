
import './App.css'
import {useLayoutEffect} from 'react'
import Layout from "./Components/Layout";
import { Group, Flex} from "@mantine/core";


function App() {
    useLayoutEffect(() => {
        document.body.style.backgroundImage = `url('https://www.shutterstock.com/image-photo/abstract-white-mat-texture-background-260nw-1574743768.jpg')`;
        document.body.style.backgroundSize = 'cover'
    }, []);

  return (
      <Layout title = {''}>
          <Group justify="center">
              <Flex>
                  <h1> Home page </h1>
              </Flex>
          </Group>
      </Layout>
  )
}

export default App
