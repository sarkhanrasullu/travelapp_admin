import React, { Component } from 'react'
import {InputField} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';
import { InputFieldType } from '../../components/react_multiplatform_components';

const rows = [
    {
        items:[
            new InputField("target.name","name")
        ]
    },
    {
        items:[
            new InputField("target.distance","distance", InputFieldType.TEXT,null, true),
        ]
    },
    {
        items:[
            new InputField("target.reviewCount","review count", InputFieldType.TEXT,null, true),
        ]
    },
    {
        items:[
            new InputField("target.reviewAvg","review avg", InputFieldType.TEXT,null, true),
        ]
    },
    {
        items:[
            new InputField("target.about","about",InputFieldType.TEXT_AREA),
        ]
    },
    {
        items:[
            new InputField("target.placeMediafileList","images",InputFieldType.IMAGE_URL_MULTIPLE, true,"placeId.id")
        ]
    }
];


class DestinationEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/places/{id}?projection=placeProjection"
                    endpoint_add_or_save="/api/places"
                    formFields={rows}
                />
        )
    }
}

export default DestinationEditPage
