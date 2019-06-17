import _ from 'lodash';
import { observable } from 'mobx';

class VehicleModelStore{
    // dummy data
    @observable 
    data = [
        {id: 0, Name: "320d", Abrv: "320d", MakeId: 0},
        {id: 1, Name: "118d", Abrv: "118d", MakeId: 0},
        {id: 2, Name: "X5", Abrv: "x5", MakeId: 0},
        {id: 3, Name: "540d", Abrv: "540d", MakeId: 0},
        {id: 4, Name: "330c", Abrv: "330c", MakeId: 0},
        {id: 5, Name: "M5", Abrv: "m5", MakeId: 0},
        {id: 6, Name: "M3", Abrv: "m3", MakeId: 0},
        {id: 7, Name: "525tds", Abrv: "525tds", MakeId: 0},
        {id: 8, Name: "330i", Abrv: "330i", MakeId: 0},
        {id: 9, Name: "528d", Abrv: "528d", MakeId: 0},
        {id: 10, Name: "316d", Abrv: "316d", MakeId: 0},
        {id: 11, Name: "318d", Abrv: "318d", MakeId: 0},
        {id: 12, Name: "323d", Abrv: "323d", MakeId: 0},
        {id: 13, Name: "420d", Abrv: "420d", MakeId: 0},
        {id: 14, Name: "320cd", Abrv: "320cd", MakeId: 0},
        {id: 15, Name: "Freelander", Abrv: "freelander", MakeId: 2}
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

    // get object with provided id
    get(id){
        // return object that corresponds to provided id in data
        return _.find(this.data, function (model) { return model.id === Number(id) });
    }

    // method for receiving object from form, finalizing it, and pushing into actual data
    add(newModel){
        // map through data to get max id then increment it by 1 and append it to object
        let maxID = 0;
        this.data.map(function(obj){
            if(obj.id > maxID) maxID = obj.id;
            return maxID += 1;
        });
        newModel.id = maxID;

        // object returned from form has MakeId type of string instead of number
        // we read the object's property and force it to be a number, then assign that value back to the object
        let MakeId = Number(newModel.MakeId);
        newModel.MakeId = MakeId;

        // object should automatically get assigned abrv based on the name
        newModel.Abrv = String(newModel.Name.toLowerCase().trim().replace(/ /g, "-"));

        // when the object is ready, push it into data
        this.data.push(newModel);
    }

    // method that received object from form and updates element with received id
    update(editedModel){
        // remove item with given model's id
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(editedModel.id); }), 1);

        // add model with that id, but now edited
        editedModel.id = Number(editedModel.id);
        editedModel.Name = String(editedModel.Name);
        editedModel.Abrv = String(editedModel.Abrv);
        editedModel.MakeId = Number(editedModel.MakeId);
        this.data.push(editedModel);
    }

    // method that removes element from data based on provided id
    delete(id){
        // find id in data based on given id then return same array with chosen element removed
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(id); }), 1);
    }
}

export default VehicleModelStore;