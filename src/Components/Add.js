import React, {Component} from 'react';
import {inject} from 'mobx-react';

@inject(i => ({
    vehicleModelListViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelListViewStore
}))

class Add extends Component{
    constructor(props){
        super();
        this.state = {
            inputValue : ''
        }
    }

    addVehicleModel = () => {
        this.props.vehicleModelListViewStore.addVehicleModel(this.state.inputValue)
        this.setState({
            inputValue : ''
        });
    }

    render(){
        return(
            <div className="App">
                <div className="addVehicleModel">
                    <input 
                        placeholder="Add new vehicle model" 
                        type="text" 
                        value={this.state.searchString} 
                        onChange={evt => this.updateInputValue(evt)}
                    />
                    <button onClick={this.addVehicleModel}>
                        Add
                    </button>
                </div>
            </div>
        );
    }
}

export default Add;