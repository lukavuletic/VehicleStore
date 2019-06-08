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
    vehicleModelEditViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelEditViewStore,
    vehicleMakeListViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore,
    rootStore: i.rootStore
}))

@observer
class VehicleModelEdit extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        const { form, editItem, getItemID, items: data, setMakeID, makeID } = this.props.vehicleModelEditViewStore;
        const { items } = data;

        const { items: dataMake } = this.props.vehicleMakeListViewStore;
        const { selectableMakeIds } = dataMake;

        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        getItemID(params.id);

        console.log(selectableMakeIds)

        return (
            <div>
                {/* ROUTING */}
                <div style={styles.root}>
                    <h1>Editing item with ID of: {params.id}</h1>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'models'} onClick={this.handleClick}>Go back to models!</button>
                </div>

                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>{items.id}</td>
                            <td>{items.Name}</td>
                            <td>{items.Abrv}</td>
                            <td>{items.MakeId}</td>
                        </tr>
                    </tbody>
                </table>

                {/* INPUT FIELDS FOR CREATE */}
                <form onSubmit={form.onSubmit}>
                    <SimpleInput field={form.$('Name')} />
                    <div>
                        model make id
                        <select onChange={setMakeID} value={makeID} required>
                            {selectableMakeIds.map((selectableMakeId) => {
                                    console.log(items.MakeId + ' ' + selectableMakeId);
                                    // eslint-disable-next-line
                                    if(items.MakeId == selectableMakeId){
                                        console.log('set selected value');
                                        return <option value={selectableMakeId} selected>{selectableMakeId}</option>;
                                    }else{
                                        return <option value={selectableMakeId}>{selectableMakeId}</option>;
                                    }
                                } 
                            )}
                        </select>
                    </div>

                    <br />
                    <button type="submit" className={$btn} onClick={editItem} value={items.Abrv}>Submit</button>
                    <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
                    <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </div>
        )
    }
}

export default defaultTemplate(VehicleModelEdit);