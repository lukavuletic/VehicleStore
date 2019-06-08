import _ from 'lodash';
import { observable } from 'mobx';

class VehicleModelStore{
    @observable data = [
        {id: 0, Name: "320d", Abrv: "320d", MakeId: "0"},
        {id: 1, Name: "118d", Abrv: "118d", MakeId: "0"},
        {id: 2, Name: "X5", Abrv: "x5", MakeId: "0"},
        {id: 3, Name: "540d", Abrv: "540d", MakeId: "0"},
        {id: 4, Name: "330c", Abrv: "330c", MakeId: "0"},
        {id: 5, Name: "M5", Abrv: "m5", MakeId: "0"},
        {id: 6, Name: "M3", Abrv: "m3", MakeId: "0"},
        {id: 7, Name: "525tds", Abrv: "525tds", MakeId: "0"},
        {id: 8, Name: "330i", Abrv: "330i", MakeId: "0"},
        {id: 9, Name: "528d", Abrv: "528d", MakeId: "0"},
        {id: 10, Name: "316d", Abrv: "316d", MakeId: "0"},
        {id: 11, Name: "318d", Abrv: "318d", MakeId: "0"},
        {id: 12, Name: "323d", Abrv: "323d", MakeId: "0"},
        {id: 13, Name: "420d", Abrv: "420d", MakeId: "0"},
        {id: 14, Name: "320cd", Abrv: "320cd", MakeId: "0"},
        {id: 15, Name: "Freelander", Abrv: "freelander", MakeId: "2"}
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

    get(id){
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        let itemIndex = this.data.findIndex(function(i){return i.id == id;});
        return {
            items: this.data[itemIndex]
        }
    }

    add(newModel, makeId){
        let maxID = 0;
        this.data.map(function(obj){
            if(obj.id > maxID) maxID = obj.id;
            return maxID += 1;
        });
        newModel.id = maxID;
        newModel.MakeId = makeId;
        newModel.Abrv = String(newModel.Name.toLowerCase().trim().replace(/ /g, "-"));
        this.data.push(newModel);
    }

    update(editedModel, id, makeID, abrv){
        // remove item with given id
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
        // add item with that id
        editedModel.id = Number(id);
        editedModel.MakeId = Number(makeID);
        editedModel.Abrv = String(abrv)
        this.data.push(editedModel);
    }

    delete(id){
        // wants to strictly compare 'any' and 'number' types (gives warning)
        // eslint-disable-next-line
        this.data.splice(this.data.findIndex(function(i){return i.id == id;}), 1);
    }
}

export default VehicleModelStore;