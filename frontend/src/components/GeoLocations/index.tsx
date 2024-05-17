import { Flex } from "antd";
import GeoLocation from "@/components/GeoLocation";


type Props = {
    geoLocations: [{
        id: string,
        street: string,
        city: string,
        county: string,
        country: string,
        location: {
            type: string,
            coordinates: []
        }
    }];
    onSetPosition: (event) => void;
    selectedLocation: string;
    setSelectedLocation: (event) => void;
}

const GeoLocations = ({ geoLocations, onSetPosition, selectedLocation, setSelectedLocation }: Props) => {
    const handleSetPosition = (location, id) => {
        onSetPosition([location.coordinates[1], location.coordinates[0]]);
        setSelectedLocation(id);
    }

    return (
        <Flex vertical gap="small" className="geolocations-container">
            {
                geoLocations.map((location, index) => (
                    <GeoLocation
                        key={index} street={location.street} id={location.id}
                        city={location.city} county={location.county}
                        country={location.country} location={location.location}
                        onClick={handleSetPosition} selectedLocation={selectedLocation}
                    />
                ))
            }
        </Flex>
    );
}

export default GeoLocations;
