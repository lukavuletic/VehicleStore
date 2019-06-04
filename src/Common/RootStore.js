import { RouterState, RouterStore } from 'mobx-state-router';

import { routes } from './routes';
import { VehicleModelModuleStore } from '../VehicleModel/Stores';
import { VehicleMakeModuleStore } from '../VehicleMake/Stores';

const notFound = new RouterState('notFound');

class RootStore{
    routerStore = new RouterStore(this, routes, notFound);
    
    constructor(){
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
    }
}

export default RootStore;