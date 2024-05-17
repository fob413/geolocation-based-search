import { Layout } from "antd";
import Drawer from "./components/drawer";
import Map from "./components/map";
import './App.css'

function App() {
  return (
    <Layout>
        <Drawer />
        <Map />
    </Layout>
  )
}

export default App
