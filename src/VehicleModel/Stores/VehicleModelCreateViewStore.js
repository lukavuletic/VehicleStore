import { action } from 'mobx';

class VehicleModelCreateViewStore {
    constructor(moduleStore){
        this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
    }

	@action.bound
	createItem(){
		console.log('here');
	}
}

export default VehicleModelCreateViewStore;