import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("thumbnail",null, "image"),
    new TableColumn("lastchangedate")
];

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
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
