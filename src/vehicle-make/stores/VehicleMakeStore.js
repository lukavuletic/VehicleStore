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

    // method that receives object from form and updates element with received id
    update(editedMake){
        // remove item with given make's id
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(editedMake.id); }), 1);

        // add make with that id, but now edited
        editedMake.id = Number(editedMake.id);
        editedMake.Name = String(editedMake.Name);
        editedMake.Abrv = String(editedMake.Abrv);
        // access data that is getting passed into parent class and then push item into it
        super.data.push(editedMake);
    }
}

export default VehicleMakeStore;