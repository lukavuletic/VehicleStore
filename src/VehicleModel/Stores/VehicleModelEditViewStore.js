import VehicleModelForm from '../Forms/VehicleModelForm';
import { action, computed } from 'mobx';

class VehicleModelEditViewStore {
	constructor(moduleStore) {
		this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
		this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;
		const { params } = moduleStore.rootStore.routerStore.routerState;
		// reaction(() => params.id, (id) => { this.form = this.getForm(id) }, {
		// 	fireImmediately: true
		//})
		this.form = this.getForm(params.id);
	}

	@computed get makes() {
		return this.vehicleMakeStore.find('', 0, 100, 'Name', 'asc');
	}

	@action.bound getForm(id) {
		let vehicleModel = this.vehicleModelStore.get(id);

		return new VehicleModelForm({
			onSuccess: (form) => {
				this.vehicleModelStore.update(form.values());
			},
			onError: (form) => {
				console.log(form.errors());
			}
		}, {
				Name: vehicleModel.Name,
				MakeId: vehicleModel.MakeId,
				Abrv: vehicleModel.Abrv,
				id: vehicleModel.id
      		}
    	);
	}
}

export default VehicleModelEditViewStore;