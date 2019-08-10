import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { InputFieldType } from '../../components/react_multiplatform_components/src/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("text",null, "textarea"),
    new TableColumn("email"),
    new TableColumn("issued"),
    new TableColumn("insertDate"),
];

const fields = [
    {
      items: [
        new InputField("text"),
        new InputField("insertDate","date", InputFieldType.DATE_TIME)
      ]
    }
  ];

export default class HelpListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/helps"
                    endpoint_delete="/api/helps"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
