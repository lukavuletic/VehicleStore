import { computed, action, observable } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelCreateViewStore {    
    constructor(rootStore){
        this.rootStore = rootStore;
        this.vehicleModelStore = rootStore.vehicleModelStore;
        this.vehicleMakeStore = rootStore.vehicleMakeStore;
        this.form = new VehicleModelForm(this);
    }
    
    // @observable makeID = 0;
    // array that will store make IDs
    @observable makeIDs = []

    // returns model items and model data
    @computed get items() {
		return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
    }

    @action.bound
    listMakeIDs () {
        this.makeIDs = this.vehicleMakeStore.getMakeIDs(this.makeIDs);
        console.log(this.makeIDs);
    }
    
    @action.bound
    createItem(){
        return this.vehicleModelStore.add(this.form.values(), this.makeID);
    }

    /* @action.bound
    setMakeID(e){
        this.makeID = e.target.value;
    } */
}

export default VehicleModelCreateViewStore;