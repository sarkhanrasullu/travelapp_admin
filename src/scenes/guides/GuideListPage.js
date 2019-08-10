import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import {TableColumn, InputField} from '../../components/react_multiplatform_components';
import { TableColumnType } from '../../components/react_multiplatform_components/src/datatable/DataTableTypes';

const columns =
    [
        new TableColumn("id"),
        new TableColumn("userId.name", "name"),
        new TableColumn("userId.surname", "surname"),
        new TableColumn("userId.email", "email"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("phone"),   
        new TableColumn("price1", "Baku"),
        new TableColumn("price2", "Absheron"),
        new TableColumn("price3", "Out of Absheron"),
        new TableColumn("userId.thumbnail", "image", TableColumnType.IMAGE_URL),
        new TableColumn("isVerified", "Verified"),
    ];

    const fields = [
        {
          items: [
            new InputField("target.userId.name","name"),
            new InputField("target.userId.surname","surname"),
            new InputField("target.age"),
            new InputField("target.gender"),
            new InputField("target.phone"),   
            new InputField("target.isVerified","Verified")
          ]
        }
      ];

export default class GuideListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint_select="/api/guides"
                    endpoint_delete="/api/guides"
                    searchFields={fields}
                    tableProps={{
                        columns: columns
                    }}
                    
                />
        )
    }
}
