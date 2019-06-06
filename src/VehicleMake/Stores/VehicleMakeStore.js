import _ from 'lodash';
import { observable } from 'mobx';

class VehicleMakeStore{
    @observable data = [
        {id: 0, Name: "Bayerische Motoren Werke", Abrv: "BMW"},
        {id: 1, Name: "Volkswagen", Abrv: "VW"},
        {id: 2, Name: "Land Rover", Abrv: "Land Rover"},
        {id: 3, Name: "Mercedes-Benz", Abrv: "Mercedes"}
    ];
    
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