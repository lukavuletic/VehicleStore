import { action } from 'mobx';

import VehicleMakeForm from '../forms/VehicleMakeForm';

class VehicleMakeEditViewStore {
	constructor(moduleStore) {
        // define routes to navigate through architecture of the app
		this.moduleStore = moduleStore;
		this.vehicleMakeStore = moduleStore.vehicleMakeStore;

		// access params from current state of routerState
		const { params } = moduleStore.rootStore.routerStore.routerState;

		// define form with params.id that will be used on edit page
		this.form = this.getForm(params.id);
	}

	// method that receives id from params (so user can't open make with id of 1, change route to 2, and still be editing 1)
	@action.bound 
	getForm(id) {
		// get make from MakeStore with provided id
		let vehicleMake = this.vehicleMakeStore.get(id);

        // instance new form that will be used on edit page
		return new VehicleMakeForm({
            // define hooks that will be triggered on onSubmit
			onSuccess: (form) => {
				this.vehicleMakeStore.update(form.values());
			},
			onError: (form) => {
				alert(form.errors());
			}
		}, 
		{
			// define its data
			id: vehicleMake.id,
			Abrv: vehicleMake.Abrv,
			Name: vehicleMake.Name
      	});
	}
}

export default VehicleMakeEditViewStore;