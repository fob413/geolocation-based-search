import { useState } from "react";
import { Layout } from "antd";
import Drawer from "./components/drawer";
import Map from "./components/map";
import './App.css'

function App() {
    const [formData, setformData] = useState({
        search: null,
        longitude: null,
        latitude: null
    });

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setformData({ ...formData, [id]: value });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('>>>>', formData);
    }

  return (
    <Layout>
        <Drawer formData={formData} onChange={handleOnChange} onSubmit={handleOnSubmit} />
        <Map />
    </Layout>
  )
}

export default App
