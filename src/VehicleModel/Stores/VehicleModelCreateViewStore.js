import {observable, computed, action} from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelListViewStore {    
    constructor(moduleStore){
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
        this.vehicleModelForm = new VehicleModelForm();
	}

    @computed get items() {
		return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
	}

}

export default VehicleModelListViewStore;