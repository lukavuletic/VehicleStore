import _ from 'lodash';
import { observable } from 'mobx';

class VehicleModelStore{
    @observable data = [
        {id: 0, MakeId: 234, Name: "320d", Abrv: "BMW"},
        {id: 1, MakeId: 523, Name: "118d", Abrv: "BMW"},
        {id: 2, MakeId: 432, Name: "X5", Abrv: "BMW"},
        {id: 3, MakeId: 876, Name: "540d", Abrv: "BMW"},
        {id: 4, MakeId: 252, Name: "330c", Abrv: "BMW"},
        {id: 5, MakeId: 524, Name: "M5", Abrv: "BMW"},
        {id: 6, MakeId: 674, Name: "M3", Abrv: "BMW"},
        {id: 7, MakeId: 1234, Name: "525tds", Abrv: "BMW"},
        {id: 8, MakeId: 463, Name: "330i", Abrv: "BMW"},
        {id: 9, MakeId: 432, Name: "528d", Abrv: "BMW"},
        {id: 10, MakeId: 7654, Name: "316d", Abrv: "BMW"},
        {id: 11, MakeId: 623, Name: "318d", Abrv: "BMW"},
        {id: 12, MakeId: 513, Name: "323d", Abrv: "BMW"},
        {id: 13, MakeId: 21, Name: "420d", Abrv: "BMW"},
        {id: 14, MakeId: 875, Name: "320cd", Abrv: "BMW"},
        {id: 15, MakeId: 653, Name: "Freelander", Abrv: "Land Rover"}
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

    add(data){

    }

    get(id){

    }

    update(item){

    }

    delete(id){
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
    }
}

export default VehicleModelStore;