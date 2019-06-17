import VehicleMakeStore from './VehicleMakeStore';
import VehicleMakeListViewStore from './VehicleMakeListViewStore';
import VehicleMakeCreateViewStore from './VehicleMakeCreateViewStore';

class VehicleMakeModuleStore{
    constructor(rootStore){
        // define routes to navigate through architecture of the app
        this.rootStore = rootStore;
        
        // instance MakeStore so it can be used from RootStore
        this.vehicleMakeStore = new VehicleMakeStore(this);
        
        // instance ViewStore so they can be used from RootStore
        this.vehicleMakeListViewStore = new VehicleMakeListViewStore(this);
        this.vehicleMakeCreateViewStore = new VehicleMakeCreateViewStore(this);
    }
}

export default VehicleMakeModuleStore;