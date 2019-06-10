import _ from 'lodash';
import { observable, action } from 'mobx';

class VehicleMakeStore{
    @observable data = [
        {id: 0, Name: "Bayerische Motoren Werke", Abrv: "bayerische-motoren-werke"},
        {id: 1, Name: "Volkswagen", Abrv: "volkswagen"},
        {id: 2, Name: "Land Rover", Abrv: "land-rover"},
        {id: 3, Name: "Mercedes-Benz", Abrv: "mercedes-benz"}
    ];

    @observable currentMakeIds = [];
    
    find(searchString, page, rpp, orderBy, orderDirection) {
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
    
    // gets make IDs and changes array from VehicleModelCreateViewStore into make id values
    @action.bound
    getMakeIDs (makeIDs) {
        // object that gets filled by id and name
        let currentMakeID = {};
        // create currentMakeIds that is a copy of observable
        let currentMakeIds = this.currentMakeIds.slice();
        // execute following logic for each element in this.data
        this.data.forEach(function(element){
            // if currentMakeIds contains id same as in data, don't push it into currentMakeIds, otherwise push data's unique id into currentMakeIds 
            // eslint-disable-next-line            
            if(currentMakeIds.includes(element.id) == false){
                // assign id and name to an object
                currentMakeID.id = element.id;
                currentMakeID.Name = element.Name;
                // push object into array
                currentMakeIds.push(currentMakeID);
            }
            // equalize makeIDs array from currentMakeIds values
            makeIDs = currentMakeIds;
        });
        // returns makeIDs array into VehicleModelCreateViewStore's method that calls getMakeIDs
        return makeIDs;
    }

    add(newModel){
        this.data.push(newModel);
    }

    get(id){

    }

    update(item){

    }

    delete(id){
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
    }
}

export default VehicleMakeStore;