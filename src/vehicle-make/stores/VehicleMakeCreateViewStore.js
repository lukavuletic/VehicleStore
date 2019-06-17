import VehicleMakeForm from '../forms/VehicleMakeForm';

class VehicleMakeCreateViewStore {
    constructor(moduleStore) {
        // define routes to navigate through architecture of the app
        this.moduleStore = moduleStore;
        this.vehicleMakeStore = moduleStore.vehicleMakeStore;
        
        // instance new form that will be used on create page
        this.form = new VehicleMakeForm({
            // define hooks that will be triggered on onSubmit
            onSuccess: (form) => {
                return this.vehicleMakeStore.add(form.values());
            },
            onError: (form) => {
                alert(form.errors());
            }
        });
    }
}

export default VehicleMakeCreateViewStore;