import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

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
    name: "MakeId",
    label: "make ID",
    placeholder: "Insert make's ID",
    rules: "required|integer"
  },
  {
    name: "Name",
    label: "model name",
    placeholder: "Insert model's name",
    rules: "required|string|between:1,25"
  },
  {
    name: "Abrv",
    label: "model abrv",
    placeholder: "Insert mode's abrv",
    rules: "required|string"
  }
];

const hooks = {
  onSuccess(form) {
    console.log("All form errors", form.values());
  },
  onError(form) {
    alert("Form has errors!");
    // get all form errors
    console.log("All form errors", form.errors());
  }
};

export default new MobxReactForm({ fields }, { plugins, hooks });