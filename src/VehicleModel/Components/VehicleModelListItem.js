import React, {Component} from 'react';
import {inject} from 'mobx-react';

@inject(i => ({
    vehicleModelListViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelListViewStore
}))

class Vehicle extends Component{
    deleteVehicleModel = () => {
        this.props.vehicleModelListViewStore.deleteVehicleModel(this.props.name);
    }

    render(){
        return(
            <li 
                className="vehicle" 
                onClick={this.deleteVehicleModel}
            >
                {this.props.name}
            </li>
        );
    }
}

export default Vehicle;