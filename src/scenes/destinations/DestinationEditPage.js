import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("distance"),
    new TableColumn("reviewCount"),
    new TableColumn("reviewAvg"),
    new TableColumn("empty",null,"empty"),
    new TableColumn("about",null,"textarea"),

];

class DestinationEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/places"
                    callback_url="/places"
                    projection="placeProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default DestinationEditPage
