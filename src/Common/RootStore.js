import { RouterState, RouterStore } from 'mobx-state-router';

import { routes } from './routes';
import { VehicleMakeModuleStore } from '../VehicleMake/Stores';
import { VehicleModelModuleStore } from '../VehicleModel/Stores';

const notFound = new RouterState('notFound');

class RootStore{
    routerStore = new RouterStore(this, routes, notFound);
    
    constructor(){
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
    }
}

export default RootStore;