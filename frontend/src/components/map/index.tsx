import { useRef, useEffect } from "react";
import { Layout } from "antd";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type Props = {
    position: null | [];
}


const Map = ({ position }: Props) => {
    const mapRef = useRef(null);
    const markerRef = useRef(null);

    useEffect(() => {
        const { current = null } = mapRef;
        if (!current) return;

        current.flyTo(position, 5)

        const marker = markerRef.current;
        if (marker) {
            marker.openPopup();
        }
    }, [position]);

    return (
        <Layout>
            <MapContainer
                center={position}
                zoom={13}
                ref={mapRef}
                style={{ height: "100vh", width: "100%"}}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    position && <Marker position={position} ref={markerRef}>
                        <Popup>
                            Longitude: {position[1]}, Latitude: {position[0]}
                        </Popup>
                    </Marker>
                }
            </MapContainer>
        </Layout>
    );
}

export default Map
