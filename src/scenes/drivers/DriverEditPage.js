import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
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
        // new TableColumn("carList.0.productionYear","Production Year"),
        // new TableColumn(null,null,"empty"),
        // new TableColumn("carList.0.modelId.brandId.id","Brand","brandpicker"),
        // new TableColumn("carList.0.modelId.id","Model","modelpicker"),
        // new TableColumn("carList.0.carCarUtilityList","Car Utilities","carutilitypicker"),
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
