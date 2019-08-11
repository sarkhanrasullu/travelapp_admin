import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { InputFieldType, TableColumnType } from '../../components/react_multiplatform_components/src/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("email"),
    new TableColumn("issued"),
    new TableColumn("insertDate", "insert date", TableColumnType.DATE_TIME),
];

const fields = [
  {
    items: [
      new InputField("email"),
      null,
      null,null
    ]
  },
  {
    items: [
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
