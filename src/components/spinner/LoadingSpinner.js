import React, { Component } from 'react'

export default class LoadingSpinner extends Component {
    render() {
        return (
            <div className={"text-center"} style={{marginTop:"5%"}}>
                    <div className="spinner-border text-primary" role="status"></div>
                    <div>Loading...</div>
            </div>
        )
    }
}
