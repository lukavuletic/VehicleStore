import VehicleMakeCreate from './VehicleMakeCreate';
import VehicleMakeList from './VehicleMakeList';

class VehicleMakeModulePage{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleModelPage = new VehicleModelPage(this);
        
        this.vehicleMakeCreate = new VehicleMakeCreate(this);
        this.VehicleMakeList = new VehicleMakeList(this);
    }
}

export default VehicleMakeModulePage;