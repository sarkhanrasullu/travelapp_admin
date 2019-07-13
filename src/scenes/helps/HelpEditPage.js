import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("insertDate"),
];

class HelpEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/helps"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default HelpEditPage
