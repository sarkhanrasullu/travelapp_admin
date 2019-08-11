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
        new InputField("name"),null,null,null,null
      ]
    }
  ];

export default class CarUtilitiesListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/carUtilities"
                    endpoint_delete="/api/carUtilities"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
