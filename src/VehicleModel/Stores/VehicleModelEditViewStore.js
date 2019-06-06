import { computed, action, observable } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelEditViewStore {
  constructor(moduleStore) {
    this.moduleStore = moduleStore;
    this.vehicleModelStore = moduleStore.vehicleModelStore;
    this.form = new VehicleModelForm();
  }

  @observable id = 0

  @computed get items() {
    return this.vehicleModelStore.get(this.id);
  }

  @action.bound
  editItem() {
    return this.vehicleModelStore.update(this.form.values(), this.id);
  }

  @action.bound
  getItemID(newID) {
    this.id = newID;
  }
}

export default VehicleModelEditViewStore;