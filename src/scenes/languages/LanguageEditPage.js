import React, { Component } from 'react'
import {TableColumn} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("name"),
];

export default class LanguageEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/languages"
                    projection="languageProjection"
                    callback_url = "/languages"
                    formDataFields={formDataFields}
                />
        )
    }
}
