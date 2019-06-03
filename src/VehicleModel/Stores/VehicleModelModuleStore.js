import VehicleModelStore from './VehicleModelStore';
import VehicleModelListViewStore from './VehicleModelListViewStore';

class VehicleModelModuleStore{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleModelStore = new VehicleModelStore(this);
        
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
    }
}

export default VehicleModelModuleStore;