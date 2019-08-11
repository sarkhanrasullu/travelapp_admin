import React, { Component } from 'react'
import {InputFieldType, InputField} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.text","message", InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.issued", "issued", InputFieldType.CHECK_BOX),
        ]
    },
]

class FeedbackEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/feedbacks/{id}?projection=feedbackProjection"
                    endpoint_add_or_save="/api/feedbacks"
                    formFields={rows}
                />
        )
    }
}

export default FeedbackEditPage
