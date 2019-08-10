import React, { Component } from 'react'
import {TableColumn} from '../../components/react_multiplatform_components';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';

const formDataFields = 
    [
        new TableColumn("userId.thumbnail","Image","imagepicker"),
        new TableColumn(null,null,"empty"),
        new TableColumn("userId.name","name"),
        new TableColumn("userId.surname","surname"),
        new TableColumn("userId.email","email"),
        new TableColumn("userId.phone","phone"),
        new TableColumn("userId.nationalityId.id","nationality"),
        new TableColumn("userId.password", "password"),
        new TableColumn("userId.roleId.id", "role"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("isVerified","Verified"),
        new TableColumn("price1","Baku"),
        new TableColumn("price2","Absheron"),
        new TableColumn("price3","Out of Absheron"),
        new TableColumn(null,null,"empty"),
        new TableColumn("driverLicenseFront","License Front","imagepicker"),
        new TableColumn("driverLicenseBack","License Back","imagepicker"),
        new TableColumn("about",null,"textarea"),
    ];

class DriverEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="/admin/drivers"
                    select_endpoint="/drivers"
                    callback_url="/drivers"
                    projection="driverProjection"
                    formDataFields={formDataFields}
                />
        )
    }
}

export default DriverEditPage;
