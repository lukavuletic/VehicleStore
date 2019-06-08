import { computed, action, observable } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelCreateViewStore {    
    constructor(moduleStore){
        this.moduleStore = moduleStore;
        this.vehicleModelStore = moduleStore.vehicleModelStore;
        this.form = new VehicleModelForm(this);
    }
    
    @observable makeID = 0;

    @computed get items() {
		return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
    }
    
    @action.bound
    createItem(){
        return this.vehicleModelStore.add(this.form.values(), this.makeID);
    }

    @action.bound
    setMakeID(e){
        this.makeID = e.target.value;
    }
}

export default VehicleModelCreateViewStore;