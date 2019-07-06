import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../entityeditpage/EntityEditPage';

const formDataFields = [
    // new TableColumn("id","id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("thumbnail"),
    new TableColumn("lastchangedate")
];
const photoDataFields = ["driverLicenseFront","driverLicenseBack","thumbnail"];
const dateDataFields = ["lastchangedate"];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="users"
                    formProps= {
                        {
                            photoDataFields: photoDataFields,
                            dateDataFields: dateDataFields,
                            formDataFields: formDataFields
                        }
                    }
                />
        )
    }
}

export default UserEditPage
