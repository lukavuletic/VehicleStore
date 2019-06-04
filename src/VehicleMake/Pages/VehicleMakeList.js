import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Pager from 'rc-pager';

import { defaultTemplate } from '../../Common/hoc';

// css for pager
import 'rc-pager/assets/bootstrap.css';

//css for table
import '../../Common/style.css'

const styles = {
    root: {
        padding: 16
    }
};

@inject(i => ({
    vehicleMakeListViewStore: i.rootStore.vehicleMakeModuleStore.vehicleMakeListViewStore
}))
@inject('rootStore')

@observer
class VehicleMakeList extends Component {
    handleClick = (e) => {
        const { rootStore } = this.props;
        const value = e.target.value;
        rootStore.routerStore.goTo(value);
    };

    render() {
		const {items: data, setOrderDirection, setSearchString, setOrderBy, handleSkip, setRpp, deleteItem} = this.props.vehicleMakeListViewStore;

        const {page, rpp, searchString, orderBy, orderDirection, items, totalItems} = data;

        const { rootStore } = this.props;
        const { params } = rootStore.routerStore.routerState;

        return(
            <div>
                {/* ROUTING */}
                <div style={styles.root}>
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
                                <td><button>edit</button><button value={item.id} onClick={deleteItem}>delete</button></td>
                            </tr>
                            )}
                        </tbody>
                    </table>
                    <span>Page: {page}</span>
                    <span>Rpp: {rpp}</span>
                    <span>Search: {searchString}</span>
                    <span>Order by: {orderBy}</span>
                    <span>Order direction: {orderDirection}</span>                    
                </div>
                
                {/* SEARCH */}
                <div>
                    <input 
                        placeholder="Search by name"
                        type="text"
                        value={searchString}
                        onChange={setSearchString}
                    />
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
            </div>
        );
    }
}

export default defaultTemplate(VehicleMakeList);