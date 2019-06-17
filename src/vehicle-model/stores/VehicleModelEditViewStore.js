import { action, computed } from 'mobx';

import VehicleModelForm from '../forms/VehicleModelForm';

class VehicleModelEditViewStore {
	constructor(moduleStore) {
        // define routes to navigate through architecture of the app
		this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
		this.vehicleMakeStore = moduleStore.rootStore.vehicleMakeModuleStore.vehicleMakeStore;

		// access params from current state of routerState
		const { params } = moduleStore.rootStore.routerStore.routerState;

		// define form with params.id that will be used on edit page
		this.form = this.getForm(params.id);
	}

    // track data from MakeStore (used for listing make ids and names)
	@computed get makes() {
		return this.vehicleMakeStore.find('', 0, 100, 'Name', 'asc');
	}

	// method that receives id from params (so user can't open model with id of 1, change route to 2, and still be editing 1)
	@action.bound 
	getForm(id) {
		// get model from ModelStore with provided id
		let vehicleModel = this.vehicleModelStore.get(id);

        // instance new form that will be used on edit page
		return new VehicleModelForm({
            // define hooks that will be triggered on onSubmit
			onSuccess: (form) => {
				this.vehicleModelStore.update(form.values());
			},
			onError: (form) => {
				alert(form.errors());
			}
		}, 
		{
			// define its data
			id: vehicleModel.id,
			Abrv: vehicleModel.Abrv,
			Name: vehicleModel.Name,
			MakeId: vehicleModel.MakeId
      	});
	}
}

export default VehicleModelEditViewStore;