import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    // new TableColumn("id","id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("thumbnail","image_base64"),
    new TableColumn("lastchangedate", "empty")
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="users"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default UserEditPage