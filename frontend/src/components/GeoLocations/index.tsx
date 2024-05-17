import { Flex, Card, Typography } from "antd";

const { Text } = Typography;

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
    }]
}

const GeoLocations = ({ geoLocations }: Props) => {
    return (
        <Flex vertical gap="small" className="geolocations-container">
            {
                geoLocations.map(location => (
                    <Card className={"card"}>
                        <Text>{location.street} <span>&#9788;</span> {location.city} <span>&#9788;</span> {location.county} <span>&#9788;</span> {location.country}</Text>
                    </Card>
                ))
            }
        </Flex>
    );
}

export default GeoLocations;
