import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { defaultTemplate } from '../../Common/hoc';

const styles = {
    root: {
        padding: 16
    }
};

@inject(i => ({
    VehicleModelCreateViewStore: i.rootStore.vehicleModelModuleStore.vehicleModelCreateViewStore
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
        const { createItem } = this.props.vehicleModelCreateViewStore;

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
                <form>
                    name: <input type="text" name="name" placeholder="320d" />
                    abrv: <input type="text" name="abrv" placeholder="BMW" />
                    makeid: <input type="text" name="makeid" placeholder="643" />
                </form>
                <button onClick={createItem}>Go Home!</button>
            </div>
        )
    }
}

export default defaultTemplate(VehicleModelCreate);