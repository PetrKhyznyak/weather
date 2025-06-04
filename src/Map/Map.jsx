import {MapContainer, Marker, TileLayer, Tooltip} from "react-leaflet";
import MapUpdater from "./MapUpdater.jsx";

const Map = ({ coord, children}) => {

    return (
        coord && <MapContainer center={coord} zoom={10} style={{ height: "400px", width: "600px" }}>
            <MapUpdater coord={coord}/>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={coord}>
                {children}
            </Marker>
        </MapContainer>
    )
}

export default Map;