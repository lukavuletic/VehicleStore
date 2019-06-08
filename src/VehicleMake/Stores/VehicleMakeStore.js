import _ from 'lodash';
import { observable } from 'mobx';

class VehicleMakeStore{
    @observable data = [
        {id: 0, Name: "Bayerische Motoren Werke", Abrv: "bmw"},
        {id: 1, Name: "Volkswagen", Abrv: "vw"},
        {id: 2, Name: "Land Rover", Abrv: "land-rover"},
        {id: 3, Name: "Mercedes-Benz", Abrv: "mercedes-benz"}
    ];

    @observable currentMakeIds = [];
    
    find(searchString, page, rpp, orderBy, orderDirection) {
        let currentData = this.data.slice();
        let currentMakeIds = this.currentMakeIds.slice();
        
        currentData.forEach(function(element){            
            // eslint-disable-next-line            
            if(currentMakeIds.includes(element.id) == false){
                currentMakeIds.push(element.id);
            }
            return currentMakeIds;
        });

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
			items: currentData,
            selectableMakeIds: currentMakeIds
		};
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