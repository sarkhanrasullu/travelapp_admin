import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("distance",null, "text",null, true),
    new TableColumn("reviewCount",null, "text",null, true),
    new TableColumn("reviewAvg",null, "text",null, true),
    new TableColumn(null,null,"empty"),
    new TableColumn("about",null,"textarea"),
    new TableColumn("placeMediafileList",null,"imagespicker", "placeId", true),
];

class DestinationEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/admin/places"
                    select_endpoint="/places"
                    callback_url="/places"
                    projection="placeProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default DestinationEditPage
