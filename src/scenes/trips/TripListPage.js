import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),   
    new TableColumn("pickupDate", "pickup date"),
    new TableColumn("pickupTime", "pickup time"),
    new TableColumn("placeId.name", "place"),
    new TableColumn("nationalityId.name", "nationality"),
    new TableColumn("insertDate", "insert date"),
    new TableColumn("lastchangedate"),
];
const photoDataFields = ["driverLicenseFront","driverLicenseBack","thumbnail"];
const dateDataFields = ["lastchangedate"];
const ignoreDataFields = ["_links"];

export default class TripListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="trips"
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
