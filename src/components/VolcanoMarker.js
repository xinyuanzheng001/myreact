import { Icon } from '@iconify/react'
import volcano from '@iconify/icons-emojione/volcano'

const VolcanoMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={volcano} className="location-icon"/>
        </div>
    )
}

export default VolcanoMarker
