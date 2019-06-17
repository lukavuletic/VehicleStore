import { computed } from 'mobx';

import VehicleModelForm from '../forms/VehicleModelForm';

class VehicleModelCreateViewStore {
    constructor(moduleStore) {
        // define routes to navigate through architecture of the app
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
        this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
        
        // instance new form that will be used on create page
        this.form = new VehicleModelForm({
            // define hooks that will be triggered on onSubmit
            onSuccess: (form) => {
                return this.vehicleModelStore.add(form.values());
            },
            onError: (form) => {
                alert(form.errors());
            }
        });
    }

    // track data from MakeStore (used for listing make ids and names)
	@computed get makes() {
		return this.vehicleMakeStore.find('', 0, 100, 'Name', 'asc');
	}
}

export default VehicleModelCreateViewStore;