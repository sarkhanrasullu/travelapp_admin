import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
];

export default class LanguageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/languages"
                    formDataFields={formDataFields}
                />
        )
    }
}