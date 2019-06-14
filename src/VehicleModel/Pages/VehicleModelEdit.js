import React from 'react';
import { inject, observer } from 'mobx-react';
import VehicleModelEditViewStore from '../Stores/VehicleModelEditViewStore'

// inject RootStore and instance of VehicleModelEditViewStore
@inject(i => ({
    rootStore: i.rootStore,
    vehicleModelEditViewStore: new VehicleModelEditViewStore(i.rootStore.vehicleModelModuleStore)
}))

@observer
class VehicleModelEdit extends React.Component {
    // handler for routing, takes value of a button and takes you to that route
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        // passed methods and variables from VehicleModelEditViewStore
        const { form, makes } = this.props.vehicleModelEditViewStore;

        // if form is non existant, return null (fix for params from routing)
        if (!form) return null;

        return (
            <React.Fragment>
                {/* ROUTING */}
                <div>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'models'} onClick={this.handleClick}>Go back to models!</button>
                </div>

                {/* EDIT FORM */}
                <form>
                    <label htmlFor={form.$('Name')}>
                        {form.$('Name').label}
                    </label>
                    <input {...form.$('Name').bind()} />
                    <p>{form.$('Name').error}</p>

                    <label htmlFor={form.$('MakeId').id}>
                        {form.$('MakeId').label}
                    </label>
                    <select {...form.$('MakeId').bind()}>
                        {makes.items.map(make =>
                            <option key={make.id} value={make.id}>{make.Name}</option>
                        )}
                    </select>
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

export default VehicleModelEdit;