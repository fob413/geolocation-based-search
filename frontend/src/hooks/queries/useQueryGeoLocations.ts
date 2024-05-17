import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import QueryKeys from "../../utils/queryKeys";

type QueryProps = {
    search: undefined | string;
    longitude: undefined | number;
    latitude: undefined | number;
}


const url = ({ search, longitude, latitude }: QueryProps) => {
    return `${process.env.REACT_APP_BEND_URL}/geo-location/search?${search && `q=${search}&`}${longitude && `longitude=${longitude}&`}${latitude && `latitude=${latitude}`}`
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
        queryFn: () => getGeoLocations({ search, longitude, latitude })
    });
}

export default useQueryGeoLocations;
