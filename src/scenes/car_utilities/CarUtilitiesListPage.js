import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
];

const searchFields = [
    new TableColumn("id"),
    new TableColumn("name"),
];

export default class CarUtilitiesListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="/carUtilities"
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
