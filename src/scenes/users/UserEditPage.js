import React, { Component } from 'react'
import {TableColumn} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("password",null,"text",null,true),
    new TableColumn("nationalityId.id","nationality"),
    new TableColumn("roleId.id","role"),
    new TableColumn("thumbnail",null, "imagepicker"),
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="admin/users"
                    select_endpoint="users"
                    projection="userProjection"
                    callback_url="/users"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default UserEditPage
