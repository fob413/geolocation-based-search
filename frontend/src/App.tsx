import { useState, useEffect } from "react";
import { Layout } from "antd";
import Drawer from "./components/drawer";
import Map from "./components/map";
import useQueryGeoLocations from "@/hooks/queries/useQueryGeoLocations";
import './App.css'

function App() {
    const [formData, setformData] = useState({
        search: "",
        longitude: null,
        latitude: null
    });
    const { data, refetch } = useQueryGeoLocations(formData);
    console.log('>>> data: ', data);

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setformData({ ...formData, [id]: value });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log('>>>>', formData);
    }

    useEffect(() => {
        if (formData.search.trim().length < 3) return;
        refetch();  
    }, [formData.search]);

  return (
    <Layout>
        <Drawer formData={formData} onChange={handleOnChange} onSubmit={handleOnSubmit} />
        <Map />
    </Layout>
  )
}

export default App
