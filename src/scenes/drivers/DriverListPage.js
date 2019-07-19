import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns =
    [
        new TableColumn("id"),
        new TableColumn("userId.name","name"),
        new TableColumn("userId.surname","surname"),
        new TableColumn("userId.email","email"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("phone"),   
        new TableColumn("price1","Baku"),
        new TableColumn("price2","Absheron"),
        new TableColumn("price3","Out of Absheron"),
        new TableColumn("userId.thumbnail","image","image"),
        new TableColumn("isVerified","Verified"),
    ];

const searchFields =
    [
        new TableColumn("userId.name","name"),
        new TableColumn("userId.surname","surname"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("phone"),   
        new TableColumn("isVerified","Verified"),
    ];


export default class DriverListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="drivers"
                    searchDataFields={searchFields}
                    tableProps= {
                        {
                            columns: columns,
                        }
                    }
                    
                />
        )
    }
}
