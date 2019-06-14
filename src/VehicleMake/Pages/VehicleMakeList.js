import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pager from 'rc-pager';

import { defaultTemplate } from '../../Common/hoc';

// css for pager
import 'rc-pager/assets/bootstrap.css';

//css for table
import '../../Common/style.css'

// inject RootStore and VehicleModelListViewStore
@inject(i => ({
    rootStore: i.rootStore,
    vehicleMakeListViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore
}))

@observer
class VehicleMakeList extends Component {
    // handlers for routing, takes value of a button and takes you to that route
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    handleClickEdit = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo('makesID', { id: value });
    };

    render() {
        // passed methods and variables from VehicleMakeCreateViewStore
		const {items: data, setOrderDirection, setSearchString, setOrderBy, handleSkip, setRpp, deleteItem} = this.props.vehicleMakeListViewStore;
        const {page, rpp, searchString, items, totalItems} = data;

        // passed methods and variables from RootStore (need this to get params from routing)
        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        return(
            <React.Fragment>
                {/* ROUTING */}
                <div>
                    <h1>Welcome to makes {params.id}</h1>
                    <button value={'home'} onClick={this.handleClick}>Go Home!</button>
                    <button value={'makesCreate'} onClick={this.handleClick}>Create new make!</button>
                </div>

                {/* TABLE */}
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th onClick={e => {setOrderBy('id'); setOrderDirection()}}>id</th>
                                <th onClick={e => {setOrderBy('Name'); setOrderDirection()}}>name</th>
                                <th onClick={e => {setOrderBy('Abrv'); setOrderDirection()}}>abrv</th>
                                <th>actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map(item => 
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.Name}</td>
                                <td>{item.Abrv}</td>
                                <td>
                                    <button value={item.id} onClick={this.handleClickEdit}>edit</button>
                                    <button value={item.id} onClick={deleteItem}>delete</button>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>            
                </div>
                
                {/* SEARCH */}
                <div>
                    <input placeholder="Search by name" type="text" value={searchString} onChange={setSearchString}/>
                </div>

                {/* CHANGE RPP */}
                <div>
                    <select onChange={setRpp} value={rpp}>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>

                {/* PAGER */}
                <Pager total={Math.ceil(totalItems / rpp)} current={page} onSkipTo={handleSkip.bind(this)}/>
            </React.Fragment>
        );
    }
}

export default defaultTemplate(VehicleMakeList);