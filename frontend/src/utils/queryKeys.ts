export default {
    queryGeoLocations: (
        search: undefined | string,
        longitude: undefined | number,
        latitude: undefined | number
    ) => `geoLocation${search && `-q=${search}`}${longitude && `-longitude=${longitude}`}${latitude && `-latitude=${latitude}`}`
};
