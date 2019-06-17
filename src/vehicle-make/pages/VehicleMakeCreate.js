import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

// inject RootStore and VehicleMakeCreateViewStore
@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeCreateViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeCreateViewStore
}))

@observer
class VehicleMakeCreateViewStore extends Component {
    // handler for routing, takes value of a button and takes you to that route
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        // passed methods and variables from VehicleModelCreateViewStore
        const { form } = this.props.vehicleMakeCreateViewStore

        return (            
            <React.Fragment>
                {/* ROUTING */}
                <div>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'makes'} onClick={this.handleClick}>Go back to makes!</button>
                </div>

                {/* CREATE FORM */}
                <form>
                    <label htmlFor={form.$('Name')}>
                        {form.$('Name').label}
                    </label>
                    <input {...form.$('Name').bind()} />
                    <p>{form.$('Name').error}</p>
                    <br />

                    <button type="submit" onClick={form.onSubmit}>Submit</button>
                    <button type="button" onClick={form.onClear}>Clear</button>
                    <button type="button" onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </React.Fragment>
        )
    }
}

export default VehicleMakeCreateViewStore;