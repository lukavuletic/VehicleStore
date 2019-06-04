import _ from 'lodash';
import { observable } from 'mobx';

class VehicleMakeStore{
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
        {id: 15,  Name: "Freelander", Abrv: "Land Rover"}
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