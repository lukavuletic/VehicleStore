import BaseDataStore from '../../common/BaseDataStore';

// dummy data
const data = [
    {id: 0, Name: "320d", Abrv: "320d", MakeId: 0},
    {id: 1, Name: "118d", Abrv: "118d", MakeId: 0},
    {id: 2, Name: "X5", Abrv: "x5", MakeId: 0},
    {id: 3, Name: "540d", Abrv: "540d", MakeId: 0},
    {id: 4, Name: "330c", Abrv: "330c", MakeId: 0},
    {id: 5, Name: "M5", Abrv: "m5", MakeId: 0},
    {id: 6, Name: "M3", Abrv: "m3", MakeId: 0},
    {id: 7, Name: "525tds", Abrv: "525tds", MakeId: 0},
    {id: 8, Name: "330i", Abrv: "330i", MakeId: 0},
    {id: 9, Name: "528d", Abrv: "528d", MakeId: 0},
    {id: 10, Name: "316d", Abrv: "316d", MakeId: 0},
    {id: 11, Name: "318d", Abrv: "318d", MakeId: 0},
    {id: 12, Name: "323d", Abrv: "323d", MakeId: 0},
    {id: 13, Name: "420d", Abrv: "420d", MakeId: 0},
    {id: 14, Name: "320cd", Abrv: "320cd", MakeId: 0},
    {id: 15, Name: "Freelander", Abrv: "freelander", MakeId: 2}
];

class VehicleModelStore extends BaseDataStore{
    constructor(){
        super(data);
    }

    // method that received object from form and updates element with received id
    update(editedModel){
        // remove item with given model's id
        this.data.splice(this.data.findIndex(function(i){ return i.id === Number(editedModel.id); }), 1);

        // add model with that id, but now edited
        editedModel.id = Number(editedModel.id);
        editedModel.Name = String(editedModel.Name);
        editedModel.Abrv = String(editedModel.Abrv);
        editedModel.MakeId = Number(editedModel.MakeId);
        this.data.push(editedModel);
    }
}

export default VehicleModelStore;