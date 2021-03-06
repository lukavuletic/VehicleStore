import { RouterState, RouterStore } from 'mobx-state-router';

import { routes } from './routes';
import { VehicleMakeModuleStore } from '../vehicle-make/stores';
import { VehicleModelModuleStore } from '../vehicle-model/stores';

// instance RouterState to be used through RootStore
const notFound = new RouterState('notFound');

class RootStore{
    // instance RouterStore to be used through RootStore
    routerStore = new RouterStore(this, routes, notFound);
    
    // method that changes user's route
    goToRoute = (e) => {
        // routingParams will become an array that takes route name and id of item
        let routingParams = e.target.value.split(',');
        // check if routingParams received 2 items, if so we're having an editing route, if not we're having a normal routing method
        if(routingParams.length === 2){
            this.routerStore.goTo(routingParams[0], { id: routingParams[1] });
        }else{
            this.routerStore.goTo(e.target.value);
        }
    };
    
    constructor(){
        // instance Modules to split app and make them available to be used from RootStore
        this.vehicleMakeModuleStore = new VehicleMakeModuleStore(this);
        this.vehicleModelModuleStore = new VehicleModelModuleStore(this);
    }
}

export default RootStore;