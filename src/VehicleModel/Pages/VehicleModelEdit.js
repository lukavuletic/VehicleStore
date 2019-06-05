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
    vehicleModelEditViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelEditViewStore
}))
@inject('rootStore')

@observer
class VehicleModelEdit extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        const { form, editItem, getItemID, items: data } = this.props.vehicleModelEditViewStore;

        const { items } = data;

        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        getItemID(params.id);

        console.log(data.items);

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
                <form onSubmit={form.onSubmit} set={form}>
                    <SimpleInput field={form.$('MakeId')} />
                    <SimpleInput field={form.$('Name')} />
                    <SimpleInput field={form.$('Abrv')} />

                    <br />
                    <button type="submit" className={$btn} onClick={editItem}>Submit</button>
                    <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
                    <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </div>
        )
    }
}

export default defaultTemplate(VehicleModelEdit);