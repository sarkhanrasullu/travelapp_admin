import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { InputFieldType } from '../../components/react_multiplatform_components';

const columns = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("insertDate"),
    new TableColumn("issued"),
];

const fields = [
    {
      items: [
        new InputField("text"),
        new InputField("insertDate","date", InputFieldType.DATE_TIME)
      ]
    }
  ];

export default class FeedbackListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/feedbacks"
                    endpoint_delete="/api/feedbacks"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
