import React, { Component } from 'react'
import {TableColumn} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"),
    new TableColumn("userId.name"),
    new TableColumn("userId.surname"),
    new TableColumn("userId.email"),
    new TableColumn("userId.phone"),
    new TableColumn("userId.nationalityId.id", "nationality"),
    new TableColumn("placeId.id", "place"),
    new TableColumn("pickupDate", "pickup date"),
    new TableColumn("pickupTime", "pickup time"),
    new TableColumn("pickupCoords", "pickup place"),
];

class TripEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="trips"
                    projection="tripProjection"
                    callback_url = "/trips"
                    formDataFields= {formDataFields}
                />
        )
    }
}

export default TripEditPage
