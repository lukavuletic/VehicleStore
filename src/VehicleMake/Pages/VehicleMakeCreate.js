import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { defaultTemplate } from '../../Common/hoc';
import SimpleInput from '../../Components/simpleInput';
import form from '../Stores/VehicleMakeCreateViewStore'

const styles = {
    root: {
        padding: 16
    }
};
const $btn = 'f6 link dim bn br2 ph3 pv2 mr2 dib white bg-dark-blue';

@inject('rootStore')

@observer
class VehicleMakeCreateViewStore extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        return (
            <div>
                {/* ROUTING */}
                <div style={styles.root}>
                    <h1>Welcome to makes {params.id}</h1>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'makes'} onClick={this.handleClick}>Go back to makes!</button>
                </div>

                {/* INPUT FIELDS FOR CREATE */}
                <form onSubmit={form.onSubmit}>
                    <SimpleInput field={form.$('id')} />
                    <SimpleInput field={form.$('Name')} />
                    <SimpleInput field={form.$('Abrv')} />

                    <br />
                    <button type="submit" className={$btn} onClick={form.onSubmit}>Submit</button>
                    <button type="button" className={$btn} onClick={form.onClear}>Clear</button>
                    <button type="button" className={$btn} onClick={form.onReset}>Reset</button>

                    <p>{form.error}</p>
                </form>
            </div>
        )
    }
}

export default defaultTemplate(VehicleMakeCreateViewStore);