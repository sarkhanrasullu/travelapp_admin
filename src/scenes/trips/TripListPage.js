import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("userId.name","name"),
    new TableColumn("userId.surname","surname"),
    new TableColumn("userId.email","email"),
    new TableColumn("userId.phone","phone"),   
    new TableColumn("nationalityId.nationalityId.name","nationality"),
    new TableColumn("pickupDate","pickup date"),
    new TableColumn("pickupTime","pickup time"),
    new TableColumn("placeId.name","place"),
    new TableColumn("insertDate","insert date"),
    new TableColumn("lastchangedate"),
];

const searchFields = [
    new TableColumn("name"),
    new TableColumn("surname"),
    new TableColumn("email"),
    new TableColumn("phone"),   
];

export default class TripListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="/trips"
                    searchDataFields={searchFields}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
