import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { TableColumnType } from '../../components/react_multiplatform_components/src/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),
    new TableColumn("thumbnail","thumbnail", TableColumnType.IMAGE_URL),
    new TableColumn("lastchangedate","lastchangedate", TableColumnType.DATE_TIME)
];

const fields = [
    {
      items: [
        new InputField("target.name", "name"),
        new InputField("target.surname", "surname"),
        new InputField("target.email", "email"),
        new InputField("target.phone", "phone"),
      ]
    }
  ];

export default class UserListPage extends Component {
    render() {
        return ( 
                <EntityListPage
                    endpoint_select="/api/users"
                    endpoint_delete="/api/users"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                />
        )
    }
}
