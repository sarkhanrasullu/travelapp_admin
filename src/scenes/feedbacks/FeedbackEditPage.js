import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("email"),
    new TableColumn("issued"),
    new TableColumn("text",null, "textarea"),

];

class FeedbackEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/feedbacks"
                    callback_url="/feedbacks"
                    projection="feedbackProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default FeedbackEditPage
