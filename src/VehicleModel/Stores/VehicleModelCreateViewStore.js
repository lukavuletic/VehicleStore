import { action, observable } from 'mobx';

class VehicleModelCreateViewStore {
    @observable name = '';
    @observable abrv = '';

    constructor(moduleStore){
        this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
    }

	@action.bound
	createItem(e){
        
    }
}

export default VehicleModelCreateViewStore;