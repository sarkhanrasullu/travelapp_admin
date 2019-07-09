import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns =
    [
        new TableColumn("id"),
        new TableColumn("userId.name","name"),
        new TableColumn("userId.surname","surname"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("phone"),   
        new TableColumn("isVerified","Verified"),
        new TableColumn("price1","Baku"),
        new TableColumn("price2","Absheron"),
        new TableColumn("price3","Out of Absheron"),
        // new TableColumn("driverLicenseBack","License Back"),
        // new TableColumn("driverLicenseFront","License Front"),
        // new TableColumn("userId.thumbnail","Image")
    ];
const photoDataFields = ["driverLicenseFront","driverLicenseBack","userId.thumbnail"];
const dateDataFields = ["lastchangedate"];
const ignoreDataFields = ["_links"];

export default class DriverListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="drivers"
                    searchProps={
                        {
                            searchDataFields:[
                                {
                                    label:"id",
                                    fieldName:"id"
                                },
                                {
                                    label:"name",
                                    fieldName:"name"
                                },
                                {
                                    label:"surname",
                                    fieldName:"surname"
                                },
                                {
                                    label:"email",
                                    fieldName:"email"
                                },
                                {
                                    label:"phone",
                                    fieldName:"phone"
                                }
                            ]
                        }
                    }
                    tableProps= {
                        {
                            columns: columns,
                            photoDataFields: photoDataFields,
                            dateDataFields: dateDataFields,
                            ignoreDataFields: ignoreDataFields
                        }
                    }
                    
                />
        )
    }
}
