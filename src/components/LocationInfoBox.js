
const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li><strong>{ info.id }</strong></li>
                <li><strong>{ info.title }</strong></li>
                <li><strong>{ info.date }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
