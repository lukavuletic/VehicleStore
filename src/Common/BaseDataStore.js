import { observable } from 'mobx';
import _ from 'lodash';

class BaseDataStore {
    @observable
    data = null;

    constructor(data){
        if(!data){
            throw new Error('no data');
        }else{
            this.data = data;
        }
    }
    
    // method that returns below listed data
    find(searchString, page, rpp, orderBy, orderDirection) {
        // make a copy of data
        let currentData = this.data.slice();

        // check if user typed something in search
        if(searchString != null && searchString !== '') {
            // current data becomes filtered data based on user's input in search
            currentData = currentData.filter(car => car.Name.toLowerCase().includes(searchString.toLowerCase()));
        }

        // order data based on parameters
        currentData = _.orderBy(currentData, [orderBy], [orderDirection]);

        // count total items in array so pager knows total amount of pages
        const totalItems = currentData.length;

        // take as many results into data as user wants
        currentData = _(currentData).drop(page*rpp).take(rpp).value();
        
        // return all data
        return {
			searchString: searchString,
			page: page,
			rpp: rpp,
			orderBy: orderBy,
            orderDirection: orderDirection,
            totalItems: totalItems,
			items: currentData
		};
    }
    
    // gets item's IDs and changes array from ViewStore into item's id values
    get(id){
        // return object that corresponds to provided id in data
        return _.find(this.data, function (item) { return item.id === Number(id) });
    }

    // method for receiving object from form, finalizing it, and pushing into actual data
    add(newItem){
        // map through data to get max id then increment it by 1 and append it to object
        let maxID = 0;
        this.data.map(function(item){
            if(item.id > maxID) maxID = item.id;
            return maxID += 1;
        });
        newItem.id = maxID;

        // object should automatically get assigned abrv based on the name
        newItem.Abrv = String(newItem.Name.toLowerCase().trim().replace(/ /g, "-"));

        // when the object is ready, push it into data
        this.data.push(newItem);
    }

    // method that removes element from data based on provided id
    delete(id){
        // find id in data based on given id then return same array with chosen element removed
        this.data.splice(this.data.findIndex(function(item){ return item.id === Number(id); }), 1);
    }

    // method that receives object from form and updates element with received id
    update(editedItem){
        // remove item with given item's id
        this.data.splice(this.data.findIndex(function(item){ return item.id === Number(editedItem.id); }), 1);

        // if given item has 4 keys then it's a model, otherwise it's a make
        if((Object.keys(editedItem)).length === 4){
            // add item with that id, but now edited
            editedItem.id = Number(editedItem.id);
            editedItem.Name = String(editedItem.Name);
            editedItem.Abrv = String(editedItem.Abrv);
            editedItem.MakeId = Number(editedItem.MakeId);
            this.data.push(editedItem);
        }else{
            // add item with that id, but now edited
            editedItem.id = Number(editedItem.id);
            editedItem.Name = String(editedItem.Name);
            editedItem.Abrv = String(editedItem.Abrv);
            this.data.push(editedItem);
        }
    }    
}

export default BaseDataStore;