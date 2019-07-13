import React, { Component } from 'react'
import EntityListPage from '../../components/entitylistpage/EntityListPage';
import { TableColumn } from '../../components/datatable/DataTableTypes';

const columns = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("insertDate"),
    new TableColumn("_links",null, "empty")
];

export default class FeedbackListPage extends Component {
    render() {
        return (
                <EntityListPage
                    endpoint="/feedbacks"
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
