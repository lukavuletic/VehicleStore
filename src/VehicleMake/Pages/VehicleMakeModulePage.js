import VehicleMakeList from './VehicleMakeList';
import VehicleMakeCreate from './VehicleMakeCreate';

class VehicleMakeModulePage{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleModelPage = new VehicleModelPage(this);
        
        this.VehicleMakeList = new VehicleMakeList(this);
        this.vehicleMakeCreate = new VehicleMakeCreate(this);
    }
}

export default VehicleMakeModulePage;