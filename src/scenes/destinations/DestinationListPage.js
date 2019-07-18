import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("distance"),
    new TableColumn("reviewCount"),
    new TableColumn("reviewAvg"),
];

export default class DestinationListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="/places"
                    searchDataFields={[
                        new TableColumn("text"),
                        new TableColumn("insertDate","date")
                    ]}
                    tableProps= {
                        {
                            columns: columns
                        }
                    }
                    
                />
        )
    }
}
