import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import QueryKeys from "../../utils/queryKeys";

type QueryProps = {
    search: string;
    longitude: string | number;
    latitude: string | number;
}


const url = ({ search, longitude, latitude }: QueryProps) => {
    return `${process.env.REACT_APP_BEND_URL}/geo-location/search?${
        (search && typeof search == "string" && search.trim().length > 2)  && `q=${search}&`}${
        longitude && `longitude=${longitude}&`}${
        latitude && `latitude=${latitude}`}`
};

const getGeoLocations = async ({ search, longitude, latitude }: QueryProps) => {
    const response = await axios(url({ search, longitude, latitude }), {
        method: "GET"
    });
    return response?.data;
}

const useQueryGeoLocations = ({ search, longitude, latitude }: QueryProps) => {
    return useQuery({
        queryKey: [QueryKeys.queryGeoLocations(search, longitude, latitude)],
        queryFn: () => getGeoLocations({ search, longitude, latitude }),
        enabled: false
    });
}

export default useQueryGeoLocations;
