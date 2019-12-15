import React, { Component } from 'react';
import EntityEditPage from '../../components/entityeditpage/EntityEditPage';
import { InputField } from '../../components/react_multiplatform_components';

const rows = [
    {
        items: [
                new InputField("target.userId.name","name")
            ]
        },
    {
        items: [
                new InputField("target.userId.surname","surname")
            ]
        }
                ,
    {
        items: [
                new InputField("target.userId.email","email")
            ]
        }
                ,
    {
        items: [
                new InputField("target.userId.phone","phone"),  
            ]
        }
                ,
    {
        items: [
                new InputField("target.userId.nationalityId.name","nationality")
            ]
        }
        ,
    {
        items: [        
                new InputField("target.pickupDate","pickup date")
            ]
        }
                ,
    {
        items: [
                new InputField("target.pickupTime","pickup time")
            ]
        }
                ,
    {
        items: [
                new InputField("target.placeId.name","place")
            ]
        }
                ,
    {
        items: [

                new InputField("target.driverId.userId.name","driver name")
            ]
        }
                ,
    {
        items: [
                new InputField("target.driverId.userId.surname","driver surname")
            ]
        }
                ,
    {
        items: [
                new InputField("target.driverId.userId.email","driver email")
            ]
        }
                ,
    {
        items: [
                new InputField("target.driverId.userId.phone","driver phone")
            ]
        }
                ,
                {
                    items: [
                new InputField("target.guideId.userId.name","guide name")
            ]
        }
                ,
    {
        items: [
                new InputField("target.guideId.userId.surname","guide surname")
            ]
        }
                ,
    {
        items: [
                new InputField("target.guideId.userId.email","guide email")
            ]
        }
                ,
    {
        items: [
                new InputField("target.guideId.userId.phone","guide phone")
            ]
        }   
]

class TripEditPage extends Component {
    render() {
        return (
                <EntityEditPage
                    endpoint_select="/api/trips/{id}?projection=tripProjection"
                    endpoint_add_or_save="/api/trips"
                    formFields= {rows}
                />
        )
    }
}

export default TripEditPage
