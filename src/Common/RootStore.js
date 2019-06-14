import { RouterState, RouterStore } from 'mobx-state-router';

import { routes } from './routes';
import { VehicleMakeModuleStore } from '../VehicleMake/Stores';
import { VehicleModelModuleStore } from '../VehicleModel/Stores';

// instance RouterState to be used through RootStore
const notFound = new RouterState('notFound');

class RootStore{
    // instance RouterStore to be used through RootStore
    routerStore = new RouterStore(this, routes, notFound);
    
    constructor(){
        // instance Modules to split app and make them available to be used from RootStore
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
    }
}

export default RootStore;