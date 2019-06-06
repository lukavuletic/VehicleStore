import _ from 'lodash';
import { observable } from 'mobx';
import VehicleMakeStore from '../../VehicleMake/Stores/VehicleMakeStore';

const vehicleMakeStore = new VehicleMakeStore();

class VehicleModelStore{
    @observable data = [
        {id: 0, Name: "320d", Abrv: "BMW"},
        {id: 1, Name: "118d", Abrv: "BMW"},
        {id: 2, Name: "X5", Abrv: "BMW"},
        {id: 3, Name: "540d", Abrv: "BMW"},
        {id: 4, Name: "330c", Abrv: "BMW"},
        {id: 5, Name: "M5", Abrv: "BMW"},
        {id: 6, Name: "M3", Abrv: "BMW"},
        {id: 7, Name: "525tds", Abrv: "BMW"},
        {id: 8, Name: "330i", Abrv: "BMW"},
        {id: 9, Name: "528d", Abrv: "BMW"},
        {id: 10, Name: "316d", Abrv: "BMW"},
        {id: 11, Name: "318d", Abrv: "BMW"},
        {id: 12, Name: "323d", Abrv: "BMW"},
        {id: 13, Name: "420d", Abrv: "BMW"},
        {id: 14, Name: "320cd", Abrv: "BMW"},
        {id: 15, Name: "Freelander", Abrv: "Land Rover"}
    ];

    sortMakeID() {
        let makeData = vehicleMakeStore.data.slice();
        let modelData = this.data.slice();
        let returnedID = 0;
        
        modelData.forEach(function(element){
            // runs this function for each object in modelData array
            // element.Abrv gets Abrv of each object in modelData
            let currentModelAbrv = element.Abrv;
            makeData.forEach(function(element){
                // runs this function for each object in makeData array
                // element.Abrv gets Abrv of each object in modelData
                // wants to strictly compare 'any' and 'number' types (gives warning)
                // eslint-disable-next-line
                if(element.Abrv == currentModelAbrv){
                    returnedID = element.id;
                }
                return returnedID;
            });
            element.MakeId = returnedID;
        });
    }
    
    find(searchString, page, rpp, orderBy, orderDirection) {
        this.sortMakeID();
        let currentData = this.data.slice();

        if(searchString != null && searchString !== '') {
            currentData = currentData.filter(car => car.Name.toLowerCase().includes(searchString.toLowerCase()));
        }

        currentData = _.orderBy(currentData, [orderBy], [orderDirection]);
        const totalItems = currentData.length;
        currentData = _(currentData).drop(page*rpp).take(rpp).value();
        
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

    get(id){
        this.sortMakeID();
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        let itemIndex = this.data.findIndex(function(i){return i.id == id;});
        return {
            items: this.data[itemIndex]
        }
    }

    add(newModel){
        let maxID = 0;
        this.data.map(function(obj){
            if(obj.id > maxID) maxID = obj.id;
            return maxID += 1;
        });
        newModel.id = Number(maxID);
        this.data.push(newModel);
    }

    update(editedModel, id){
        // remove item with given id
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
        // add item with that id
        editedModel.id = Number(id);
        this.data.push(editedModel);
    }

    delete(id){
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
    }
}

export default VehicleModelStore;