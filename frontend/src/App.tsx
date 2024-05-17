import { useState, useEffect } from "react";
import { Layout, notification } from "antd";
import Drawer from "./components/drawer";
import Map from "./components/map";
import useQueryGeoLocations from "@/hooks/queries/useQueryGeoLocations";
import './App.css'

function App() {
    const [formData, setformData] = useState({
        search: "",
        longitude: "",
        latitude: ""
    });
    const [api, contextHolder] = notification.useNotification();
    const { data, refetch } = useQueryGeoLocations(formData);
    console.log('>>> data: ', data);

    const handleOnChange = (event) => {
        const { id, value } = event.target;
        setformData({ ...formData, [id]: value });
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();

        if (
            (formData.longitude.length > 0 && formData.latitude.length < 1) ||
            (formData.longitude.length < 1 && formData.latitude.length > 0)
        ) {
            api.error({
                message: "Invalid Coordinates",
                description: "Ensure you've included both Longitude and Latitude",
                placement: "bottomLeft",
            });
            return
        }

        refetch();
    }

    // make query from 3 search characters
    useEffect(() => {
        if (formData.search.trim().length < 3) return;
        refetch();
    }, [formData.search]);

  return (
    <Layout>
        {contextHolder}
        <Drawer
            formData={formData} onChange={handleOnChange} onSubmit={handleOnSubmit}
        />
        <Map />
    </Layout>
  )
}

export default App
