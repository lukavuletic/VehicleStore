import { computed, action, observable } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelEditViewStore {
  constructor(moduleStore) {
    this.moduleStore = moduleStore;
    this.vehicleModelStore = moduleStore.vehicleModelStore;
    this.form = new VehicleModelForm(this);
  }

  @observable id = 0;
  @observable makeID = 0;
  @observable currentAbrv = ''

  @computed get items() {
    return this.vehicleModelStore.get(this.id);
  }

  @action.bound
  editItem(e) {
    this.currentAbrv = e.target.value;
    return this.vehicleModelStore.update(this.form.values(), this.id, this.makeID, this.currentAbrv);
  }

  @action.bound
  getItemID(newID) {
    this.id = newID;
  }

  @action.bound
  setMakeID(e){
    this.makeID = e.target.value;
  }
}

export default VehicleModelEditViewStore;