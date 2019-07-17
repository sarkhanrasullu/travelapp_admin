import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("thumbnail",null, "image_base64"),
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="users"
                    projection="userProjection"
                    callback_url="/users"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default UserEditPage
