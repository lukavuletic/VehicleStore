import { computed, action } from 'mobx';
import VehicleModelForm from './VehicleModelForm';

class VehicleModelEditViewStore {
  constructor(moduleStore) {
    this.moduleStore = moduleStore;
    this.vehicleModelStore = moduleStore.vehicleModelStore;
    this.form = new VehicleModelForm();
  }

  @computed get items() {
    return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
  }

  @action.bound
  editItem() {
    console.log('here');
  }
}

export default VehicleModelEditViewStore;