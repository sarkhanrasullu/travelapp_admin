import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("pickupDate", "pickup date"),
    new TableColumn("pickupTime", "pickup time"),
    new TableColumn("placeId.name", "place"),
    new TableColumn("nationalityId.name", "nationality"),
    new TableColumn("insertDate", "insert date"),
    new TableColumn("lastchangedate"),
];

class TripEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="trips"
                    formDataFields= {
                        {
                            formDataFields
                        }
                    }
                />
        )
    }
}

export default TripEditPage
