import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { TableColumnType, SelectBox } from '../../components/react_multiplatform_components/src/datatable/DataTableTypes';

const columns =
    [
        new TableColumn("id"),
        new TableColumn("userId.name","name"),
        new TableColumn("userId.surname","surname"),
        new TableColumn("userId.email","email"),
        new TableColumn("age"),
        new TableColumn("genderId.name","gender"),
        new TableColumn("phone"),   
        new TableColumn("price1","Baku"),
        new TableColumn("price2","Absheron"),
        new TableColumn("price3","Out of Absheron"),
        new TableColumn("userId.thumbnail","image",TableColumnType.IMAGE_URL),
        new TableColumn("isVerified","Verified"),
    ]; 

    const fields = [
        {
          items: [
            new InputField("target.userId.name","name"),
            new InputField("target.userId.surname","surname"),
            new InputField("target.age", "age"),
            new SelectBox("target.genderId.id","gender","/api/genders","id","name"),
            new InputField("target.phone"),   
            new InputField("target.isVerified","Verified"),
          ]
        }
      ];

export default class DriverListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/drivers"
                    endpoint_delete="/api/drivers"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
