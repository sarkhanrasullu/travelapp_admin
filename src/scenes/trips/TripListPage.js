import React, { Component } from 'react';
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { InputField, TableColumn } from '../../components/react_multiplatform_components';

const columns = [
    new TableColumn("id"),
    new TableColumn("userId.name","name"),
    new TableColumn("userId.surname","surname"),
    new TableColumn("userId.email","email"),
    new TableColumn("userId.phone","phone"),   
    new TableColumn("userId.nationalityId.name","nationality"),
    
    new TableColumn("pickupDate","pickup date"),
    new TableColumn("pickupTime","pickup time"),
    new TableColumn("placeId.name","place"),

    new TableColumn("driverId.userId.name","driver name"),
    new TableColumn("driverId.userId.surname","driver surname"),
    new TableColumn("driverId.userId.phone","driver phone"),   


    new TableColumn("guideId.userId.name","guide name"),
    new TableColumn("guideId.userId.surname","guide surname"),
    new TableColumn("guideId.userId.phone","guide phone"),   

  
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
