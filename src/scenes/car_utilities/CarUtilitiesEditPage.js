import React, { Component } from 'react'
import {InputField} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const rows = [
    {
        items:[
            new InputField("target.name","name")
        ]
    }
];


export default class CarUtilitiesEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/carUtilities/{id}?projection=idNameProjection"
                    endpoint_add_or_save="/api/carUtilities"
                    formFields={rows}
                />
        )
    }
}
