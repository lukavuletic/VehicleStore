import VehicleModelStore from './VehicleModelStore';
import VehicleModelListViewStore from './VehicleModelListViewStore';
import VehicleModelCreateViewStore from './VehicleModelCreateViewStore';
import VehicleModelEditViewStore from './VehicleModelEditViewStore';

class VehicleModelModuleStore{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleModelStore = new VehicleModelStore(this);
        
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
        this.vehicleModelCreateViewStore = new VehicleModelCreateViewStore(this);
        this.vehicleModelEditViewStore = new VehicleModelEditViewStore(this);
    }
}

export default VehicleModelModuleStore;