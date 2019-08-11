import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { TableColumnType } from '../../components/react_multiplatform_components';

const columns = [
    new TableColumn("id"),
    new TableColumn("userId.name","name"),
    new TableColumn("userId.surname","surname"),
    new TableColumn("userId.email","email"),
    new TableColumn("userId.phone","phone"),   
    new TableColumn("userId.nationalityId.name","nationality"),
    new TableColumn("pickupDate","pickup date", TableColumnType.DATE_TIME),
    new TableColumn("pickupTime","pickup time", TableColumnType.DATE_TIME),
    new TableColumn("placeId.name","place"),
    new TableColumn("insertDate","insert date", TableColumnType.DATE_TIME),
    new TableColumn("lastchangedate", TableColumnType.DATE_TIME),
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

export default class TripListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/trips"
                    endpoint_delete="/api/trips"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
