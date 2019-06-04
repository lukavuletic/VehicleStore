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
    vehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore
}))
@inject('rootStore')

@observer
class VehicleModelCreate extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        const { createItem, form } = this.props.vehicleModelCreateViewStore;

        // const {page, rpp, searchString, orderBy, orderDirection, items, totalItems} = data;

        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        return (
            <div>
                <button onClick={createItem}>stisni</button>

                {/* ROUTING */}
                <div style={styles.root}>
                    <h1>Welcome to models {params.id}</h1>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'models'} onClick={this.handleClick}>Go back to models!</button>
                </div>

                {/* INPUT FIELDS FOR CREATE */}
                <form onSubmit={form.onSubmit}>
                    <SimpleInput field={form.$('id')} />
                    <SimpleInput field={form.$('MakeId')} />
                    <SimpleInput field={form.$('Name')} />
                    <SimpleInput field={form.$('Abrv')} />

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