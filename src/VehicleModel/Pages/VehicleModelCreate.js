import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { defaultTemplate } from '../../Common/hoc';
import SimpleInput from '../../Components/simpleInput';

const styles = {
    root: {
        padding: 16
    }
};
const $btn = 'f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue';

@inject(i => ({
    vehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore,
    vehicleMakeListViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore,
    rootStore: i.rootStore
}))

@observer
class VehicleModelCreate extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    
    render() {
        const { createItem, form, setMakeID, makeID } = this.props.vehicleModelCreateViewStore;

        const {items: dataMake} = this.props.vehicleMakeListViewStore;
        const {selectableMakeIds} = dataMake;
        
        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        return (
            <div>
                {/* ROUTING */}
                <div style={styles.root}>
                    <h1>Welcome to models {params.id}</h1>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'models'} onClick={this.handleClick}>Go back to models!</button>
                </div>

                {/* INPUT FIELDS FOR CREATE */}
                <form onSubmit={form.onSubmit}>
                    <SimpleInput field={form.$('Name')} />
                    <div>
                        model make id
                        <select onChange={setMakeID} value={makeID}>
                            {selectableMakeIds.map(selectableMakeId => 
                                <option value={selectableMakeId}>{selectableMakeId}</option>
                            )}
                        </select>
                    </div>

                    <br />
                    <button type="submit" className={$btn} onClick={createItem}>Submit</button>
                    <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
                    <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </div>
        )
    }
}

export default defaultTemplate(VehicleModelCreate);