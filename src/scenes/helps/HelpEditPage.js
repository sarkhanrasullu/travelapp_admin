import React, { Component } from 'react'
import {TableColumn} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = [
    new TableColumn("email"),
    new TableColumn("issued"),
    new TableColumn("text",null, "textarea"),

];

class HelpEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/helps"
                    callback_url="/helps"
                    projection="helpProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default HelpEditPage
