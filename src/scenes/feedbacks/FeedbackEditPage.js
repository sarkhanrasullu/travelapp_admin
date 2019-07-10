import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("id"),
    new TableColumn("text"),
    new TableColumn("insertDate"),
    new TableColumn("_links","empty")
];

class FeedbackEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="feedbacks"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default FeedbackEditPage
