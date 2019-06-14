import VehicleModelStore from './VehicleModelStore';
import VehicleModelListViewStore from './VehicleModelListViewStore';
import VehicleModelCreateViewStore from './VehicleModelCreateViewStore';

class VehicleModelModuleStore{
    constructor(rootStore){
        // define routes to navigate through architecture of the app
        this.rootStore = rootStore;

        // instance ModelStore so it can be used from RootStore
        this.vehicleModelStore = new VehicleModelStore(this);
        
        // instance ViewStore so they can be used from RootStore
        this.vehicleModelListViewStore = new VehicleModelListViewStore(this);
        this.vehicleModelCreateViewStore = new VehicleModelCreateViewStore(this);
    }
}

export default VehicleModelModuleStore;