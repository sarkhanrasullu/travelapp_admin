import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
];

export default class CarUtilitiesEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/carUtilities"
                    callback_url="/carutilities"
                    projection="carUtilityProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}
