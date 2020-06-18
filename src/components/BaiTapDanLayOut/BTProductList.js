import React, { Component } from 'react'
import BTProductItems from './BTProductItems'

export default class BTProductList extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div text-center display-4>

                    <div className="col-3">
                        <BTProductItems />
                    </div>

                    <div className="col-3">
                        <BTProductItems />
                    </div>

                    <div className="col-3">
                        <BTProductItems />
                    </div>

                    <div className="col-3">
                        <BTProductItems />
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
