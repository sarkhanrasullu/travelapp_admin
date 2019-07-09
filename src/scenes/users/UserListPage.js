import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id","id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    // new TableColumn("thumbnail"),
    new TableColumn("lastchangedate")
];
const photoDataFields = ["driverLicenseFront","driverLicenseBack","thumbnail"];
const dateDataFields = ["lastchangedate"];
const ignoreDataFields = ["_links"];

export default class UserListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="users"
                    searchDataFields={[
                        new TableColumn("name"),
                        new TableColumn("surname"),
                        new TableColumn("email"),
                        new TableColumn("phone")
                    ]}
                    tableProps= {
                        {
                            columns: columns,
                            photoDataFields: photoDataFields,
                            dateDataFields: dateDataFields,
                            ignoreDataFields: ignoreDataFields
                        }
                    }
                    
                />
        )
    }
}
