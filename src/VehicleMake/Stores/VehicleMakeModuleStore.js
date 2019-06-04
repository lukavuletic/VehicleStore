import VehicleMakeStore from './VehicleMakeStore';
import VehicleMakeListViewStore from './VehicleMakeListViewStore';

class VehicleMakeModuleStore{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleMakeStore = new VehicleMakeStore(this);
        
        this.vehicleMakeListViewStore = new VehicleMakeListViewStore(this);
    }
}

export default VehicleMakeModuleStore;