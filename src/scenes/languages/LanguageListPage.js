import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("name"),
    new TableColumn("_links",null,"empty")
];

const searchFields = [
    new TableColumn("id"),
    new TableColumn("name"),
];

export default class LanguageListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="/languages"
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