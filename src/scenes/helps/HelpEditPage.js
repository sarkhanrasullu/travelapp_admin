import React, { Component } from 'react'
import {InputField, InputFieldType} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.email","email"),
        ]
    },
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

class HelpEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/helps/{id}?projection=helpProjection"
                    endpoint_add_or_save="/api/helps"
                    formFields={rows}
                />
        )
    }
}

export default HelpEditPage
