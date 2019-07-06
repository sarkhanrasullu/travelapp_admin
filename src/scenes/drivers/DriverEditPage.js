import React, { Component } from 'react'
import { TableColumn } from '../../components/datatable/DataTableTypes';
import EntityEditPage from '../entityeditpage/EntityEditPage';

const formDataFields = 
    [
        // new TableColumn("id"),
        new TableColumn("_embedded.userId.thumbnail","Image"),
        new TableColumn("empty"),
        new TableColumn("_embedded.userId.name","name"),
        new TableColumn("_embedded.userId.surname","surname"),
        new TableColumn("age"),
        new TableColumn("gender"),
        new TableColumn("phone"),   
        new TableColumn("isVerified","Verified"),
        new TableColumn("price1","Baku"),
        new TableColumn("price2","Absheron"),
        new TableColumn("price3","Out of Absheron"),
        new TableColumn("empty"),
        new TableColumn("driverLicenseBack","License Back"),
        new TableColumn("driverLicenseFront","License Front"),
       
    ];
const photoDataFields = ["driverLicenseFront","driverLicenseBack","_embedded.userId.thumbnail"];
const dateDataFields = ["lastchangedate"];

class DriverEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint="drivers"
                    formProps= {
                        {
                            photoDataFields: photoDataFields,
                            dateDataFields: dateDataFields,
                            formDataFields: formDataFields
                        }
                    }
                />
        )
    }
}

export default DriverEditPage;
