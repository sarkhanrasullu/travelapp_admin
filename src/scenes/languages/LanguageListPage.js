import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
];

const fields = [
    {
      items: [
        new InputField("id"),
        new InputField("name")
      ]
    }
  ];


export default class LanguageListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/languages"
                    endpoint_delete="/api/languages"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
