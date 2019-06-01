import VehicleModelList from './VehicleModelList';
import VehicleModelCreate from './VehicleModelCreate';

class VehicleModelModulePage{
    constructor(rootStore){
        this.rootStore = rootStore;

        this.vehicleModelPage = new VehicleModelPage(this);
        
        this.VehicleModelList = new VehicleModelList(this);
        this.vehicleModelCreate = new VehicleModelCreate(this);
    }
}

export default VehicleModelModulePage;