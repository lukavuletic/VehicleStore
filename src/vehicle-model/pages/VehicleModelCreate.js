import React from 'react';
import { inject, observer } from 'mobx-react';

// inject RootStore and VehicleModelCreateViewStore
@inject(i => ({
    rootStore: i.rootStore,
    vehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore
}))

@observer
class VehicleModelCreate extends React.Component {
   render() {
        // passed methods and variables from VehicleModelCreateViewStore
        const { form, makes } = this.props.vehicleModelCreateViewStore

        return (
            <React.Fragment>
                {/* ROUTING */}
                <div>
                    <button value={'home'} onClick={this.props.rootStore.goToRoute}>Go Home!</button>
                    <button value={'models'} onClick={this.props.rootStore.goToRoute}>Go back to models!</button>
                </div>

                {/* CREATE FORM */}
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
                    <p>{form.$('MakeId').error}</p>
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

export default VehicleModelCreate;