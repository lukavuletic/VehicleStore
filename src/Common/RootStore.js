import { RouterState, RouterStore } from 'mobx-state-router';

import { routes } from './routes';
import { VehicleMakeModuleStore } from '../vehicle-make/stores';
import { VehicleModelModuleStore } from '../vehicle-model/stores';

// instance RouterState to be used through RootStore
const notFound = new RouterState('notFound');

class RootStore{
    // instance RouterStore to be used through RootStore
    routerStore = new RouterStore(this, routes, notFound);
    
    // methods that change user's route
    goToRoute = (e) => {
        this.routerStore.goTo(e.target.value);
    };
    goToRouteEdit = (e) => {
        this.routerStore.goTo('modelsID', { id: e.target.value });
    };
    
    constructor(){
        // instance Modules to split app and make them available to be used from RootStore
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
    }
}

export default RootStore;