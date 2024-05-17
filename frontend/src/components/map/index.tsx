import { useRef } from "react";
import { Layout } from "antd";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
    const mapRef = useRef(null);
    const latitude = 43.59;
    const longitude = -79.64;

    return (
        <Layout>
            <MapContainer
                center={[ latitude, longitude ]}
                zoom={13}
                ref={mapRef}
                style={{ height: "100vh", width: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </Layout>
    );
}

export default Map
