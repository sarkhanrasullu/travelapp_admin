import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("email"),
    new TableColumn("issued"),
];

class HelpEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/helps"
                    callback_url="/helps"
                    projection="helpProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default HelpEditPage
