import React from 'react';
import { inject, observer } from 'mobx-react';

import VehicleMakeEditViewStore from '../stores/VehicleMakeEditViewStore';

// inject RootStore and instance of VehicleMakeEditViewStore
@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeEditViewStore: new VehicleMakeEditViewStore(i.rootStore.vehicleMakeModuleStore)
}))

@observer
class VehicleMakeEdit extends React.Component {
    render() {
        // passed methods and variables from VehicleModelEditViewStore
        const { form } = this.props.vehicleMakeEditViewStore;

        // if form is non existant, return null (fix for params from routing)
        if (!form) return null;

        return (
            <React.Fragment>
                {/* ROUTING */}
                <div>
                    <button value={'home'} onClick={this.props.rootStore.goToRoute}>Go Home!</button>
                    <button value={'makes'} onClick={this.props.rootStore.goToRoute}>Go back to makes!</button>
                </div>

                {/* EDIT FORM */}
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
        );
    }
}

export default VehicleMakeEdit;