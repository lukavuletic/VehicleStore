import BaseDataStore from '../../common/BaseDataStore';

// dummy data
const data = [
    {id: 0, Name: "Bayerische Motoren Werke", Abrv: "bayerische-motoren-werke"},
    {id: 1, Name: "Volkswagen", Abrv: "volkswagen"},
    {id: 2, Name: "Land Rover", Abrv: "land-rover"},
    {id: 3, Name: "Mercedes-Benz", Abrv: "mercedes-benz"}
];

class VehicleMakeStore extends BaseDataStore{
    constructor(){
        super(data);
    }
}

export default VehicleMakeStore;