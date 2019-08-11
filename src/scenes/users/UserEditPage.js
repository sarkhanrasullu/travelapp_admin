import React, { Component } from 'react'
import {InputFieldType, InputField} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';
import { SelectBox } from '../../components/react_multiplatform_components';

const rows = [
    {
        items:[
            new InputField("target.name","name")
        ]
    },
    {
        items:[
            new InputField("target.surname","surname")
        ]
    },
    {
        items:[
            new InputField("target.email","email")
        ]
    },
    {
        items:[
            new InputField("target.phone","phone")
        ]
    },
    {
        items:[
            new InputField("target.password","password", InputFieldType.PASSWORD)
        ]
    },
    {
        items:[
            new SelectBox("target.nationalityId.id","nationality",'/api/nationalities','id','name')
        ]
    },
    {
        items:[
            new SelectBox("target.roleId.id","role", '/api/userRoles',"id","name")
        ]
    },
    {
        items:[
            new InputField("target.thumbnail","thumbnail", InputFieldType.IMAGE_URL),
            null
        ]
    },
];

class UserEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/users/{id}?projection=userProjection"
                    endpoint_add_or_save="/api/admin/users"
                    formFields={rows}
                />
        )
    }
}

export default UserEditPage
