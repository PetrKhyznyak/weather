import {useMap} from "react-leaflet";
import {useEffect} from "react";

const MapUpdater = ({ coord }) => {
    const map = useMap();
    useEffect(() => {
        if (coord && coord.length > 1) {
            map.setView(coord, 10);
        }
    }, [coord, map]);

    return null
}

export default MapUpdater;