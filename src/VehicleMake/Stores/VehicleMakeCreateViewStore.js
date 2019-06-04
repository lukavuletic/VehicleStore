import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";
import VehicleMakeStore from './VehicleMakeStore';

const vehicleMakeStore = new VehicleMakeStore(this);

const plugins = {
  dvr: dvr(validatorjs)
};

const fields = [
  {
    name: "id",
    label: "ID",
    placeholder: "Insert ID",
    rules: "required|integer"
  },
  {
    name: "Name",
    label: "make name",
    placeholder: "Insert make's name",
    rules: "required|string|between:1,25"
  },
  {
    name: "Abrv",
    label: "make abrv",
    placeholder: "Insert make's abrv",
    rules: "required|string"
  }
];

const hooks = {
  onSuccess(form) {
    return vehicleMakeStore.add(form.values());
  },
  onError(form) {
    alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  }
};

export default new MobxReactForm({ fields }, { plugins, hooks });