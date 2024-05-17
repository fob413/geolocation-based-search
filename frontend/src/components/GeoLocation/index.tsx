import { Card, Typography } from "antd";

const { Text } = Typography;

type Props = {
    id: string;
    street: string;
    city: string;
    county: string;
    country: string;
    onClick: (location: object, id: string) => void;
    location: {
        type: string,
        coordinates: []
    };
    selectedLocation: string;
}

const GeoLocation = ({
         id, street, city, county,
         country, location, onClick,
         selectedLocation
}: Props) => {
    return (
        <Card className={`card ${selectedLocation === id && 'selectedLocation'}`} onClick={() => onClick(location, id)}>
            <Text>{street} <span>&#9788;</span> {city} <span>&#9788;</span> {county} <span>&#9788;</span> {country}</Text>
        </Card>
    );
}

export default GeoLocation
