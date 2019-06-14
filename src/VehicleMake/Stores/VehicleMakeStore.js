import _ from 'lodash';
import { observable } from 'mobx';

class VehicleMakeStore{
    // dummy data
    @observable
    data = [
        {id: 0, Name: "Bayerische Motoren Werke", Abrv: "bayerische-motoren-werke"},
        {id: 1, Name: "Volkswagen", Abrv: "volkswagen"},
        {id: 2, Name: "Land Rover", Abrv: "land-rover"},
        {id: 3, Name: "Mercedes-Benz", Abrv: "mercedes-benz"}
    ];
    
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
    
    // gets make IDs and changes array from VehicleModelCreateViewStore into make id values
    get(id){
        // return object that corresponds to provided id in data
        return _.find(this.data, function (make) { return make.id === Number(id) });
    }

    // method for receiving object from form, finalizing it, and pushing into actual data
    add(newMake){
        // map through data to get max id then increment it by 1 and append it to object
        let maxID = 0;
        this.data.map(function(obj){
            if(obj.id > maxID) maxID = obj.id;
            return maxID += 1;
        });
        newMake.id = maxID;

        // object should automatically get assigned abrv based on the name
        newMake.Abrv = String(newMake.Name.toLowerCase().trim().replace(/ /g, "-"));

        // when the object is ready, push it into data
        this.data.push(newMake);
    }

    // method that receives object from form and updates element with received id
    update(editedMake){
        // remove item with given make's id
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(editedMake.id); }), 1);

        // add make with that id, but now edited
        editedMake.id = Number(editedMake.id);
        editedMake.Name = String(editedMake.Name);
        editedMake.Abrv = String(editedMake.Abrv);
        this.data.push(editedMake);
    }

    // method that removes element from data based on provided id
    delete(id){
        // find id in data based on given id then return same array with chosen element removed
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(id); }), 1);
    }
}

export default VehicleMakeStore;