import React, { Component } from 'react'
import {InputField, InputFieldType} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';
import { SelectBox } from '../../components/react_multiplatform_components';


const rows = [
    {
        items:[
            new InputField("target.userId.thumbnail","image",InputFieldType.IMAGE_URL),
            null
        ]
    },
    {
        items:[
        new InputField("target.userId.name","name"),
        new InputField("target.userId.surname","surname"),
        ]
    },
    {
        items:[
            new InputField("target.userId.email","email"),
            new InputField("target.userId.phone","phone"),
        ]
    },
    {
        items:[
            new SelectBox("target.userId.nationalityId.id","nationality", "/api/nationalities","id","name"),
            new InputField("target.userId.password", "password", InputFieldType.PASSWORD),
        ]
    },
    {
        items:[
            new SelectBox("target.userId.roleId.id", "role","/api/userRoles","id","name"),
            new InputField("target.age","age"),
        ]
    },
    {
        items:[
            new SelectBox("target.genderId.id", "gender","/api/genders","id","name"),
            new InputField("target.isVerified","verified", InputFieldType.CHECK_BOX),
        ]
    },
    {
        items:[
            new InputField("target.price1","Baku"),
            new InputField("target.price2","Absheron"),
        ]
    },
    {
        items:[
            new InputField("target.price3","Out of Absheron"),
            null
        ]
    },
    {
        items:[
            new InputField("target.about","about",InputFieldType.TEXT_AREA)
        ]
    }
]

class GuideEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/guides/{id}?projection=guideProjection"
                    endpoint_add_or_save="/api/admin/guides"
                    formFields={rows}
                />
        )
    }
}

export default GuideEditPage;
