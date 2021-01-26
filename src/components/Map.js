import GoogleMapReact from 'google-map-react'
import FireMarker from './FireMarker'
import VolcanoMarker from './VolcanoMarker'
import LocationInfoBox from './LocationInfoBox'
import { useState } from 'react'

const Map = ({ items, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null)
    const markers = items.map(element => {
        if(element.categories[0].id===8) {
            return <FireMarker lat={element.geometries[0].coordinates[1]} lng={element.geometries[0].coordinates[0]} onClick={()=>setLocationInfo({id:element.id, title: element.title, date: element.geometries[0].date.substring(0, 10)})}/>
        }
        if(element.categories[0].id===12 && element.geometries[0].coordinates.length === 2) {
            return <VolcanoMarker lat={element.geometries[0].coordinates[1]} lng={element.geometries[0].coordinates[0]} onClick={ () =>
                setLocationInfo({id: element.id, title: element.title, date: element.geometries[0].date.substring(0, 10)})
            }/>
        }
        return null
    });
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDYI4ItzyLeQFSp87hX0Y3w1aSXaCtw4_k'}}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 6
}

export default Map
