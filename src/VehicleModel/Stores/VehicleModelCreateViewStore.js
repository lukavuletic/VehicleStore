import VehicleModelForm from '../Forms/VehicleModelForm';
import { computed } from 'mobx';

class VehicleModelCreateViewStore {
    constructor(moduleStore) {
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
		this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
        this.form = new VehicleModelForm({
            onSuccess: (form) => {
                return this.vehicleModelStore.add(form.values());
            },
            onError: (form) => {
                console.log(form.errors());
            }
        });
    }

	@computed get makes() {
		return this.vehicleMakeStore.find('', 0, 100, 'Name', 'asc');
	}
}

export default VehicleModelCreateViewStore;