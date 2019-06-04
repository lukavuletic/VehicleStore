import { computed, action } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelListViewStore {    
    constructor(moduleStore){
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
        this.form = new VehicleModelForm();
	}

    @computed get items() {
		return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
    }
    
    @action.bound
    createItem(){
        return this.vehicleModelStore.add(this.form.values());
    }
}

export default VehicleModelListViewStore;