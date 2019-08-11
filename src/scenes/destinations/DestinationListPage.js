import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn} from '../../components/react_multiplatform_components';
import { InputFieldType, InputField } from '../../components/react_multiplatform_components';

const columns = [ 
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("distance"),
    new TableColumn("reviewCount"),
    new TableColumn("reviewAvg"),
];

const fields = [
    {
      items: [
        new InputField("target.text"),
        new InputField("target.insertDate","date", InputFieldType.DATE_TIME)
      ]
    }
  ];
export default class DestinationListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/places"
                    endpoint_delete="/api/places"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                />
                
        )
    }
}
