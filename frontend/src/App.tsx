import { useState, useEffect, useMemo } from "react";
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
    const [position, setPosition] = useState([43.595310, -79.640579]);
    const [selectedLocation, setSelectedLocation] = useState("");
    const [api, contextHolder] = notification.useNotification();
    const { data:geoLocationData, refetch } = useQueryGeoLocations(formData);

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

    const geoLocations = useMemo(() => {
        if (
            !geoLocationData ||
            !Object.prototype.hasOwnProperty.call(geoLocationData, "data") ||
            !Object.prototype.hasOwnProperty.call(geoLocationData.data, "suggestions")
        ) return [];
        return geoLocationData.data.suggestions.map(location => ({
            id: location._id,
            street: location.street,
            city: location.city,
            county: location.county,
            country: location.country,
            location: location.location
        }));
    }, [geoLocationData]);

  return (
    <Layout>
        {contextHolder}
        <Drawer
            formData={formData} onChange={handleOnChange} onSubmit={handleOnSubmit}
            geoLocations={geoLocations} onSetPosition={setPosition} selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
        />
        <Map position={position} />
    </Layout>
  )
}

export default App
