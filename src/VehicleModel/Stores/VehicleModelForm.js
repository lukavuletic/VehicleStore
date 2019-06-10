import { Form } from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

class VehicleModelForm extends Form {
  /*
    Below we are returning a `plugins` object using the `validatorjs` package
    to enable `DVR` functionalities (Declarative Validation Rules).
  */
  plugins() {
    return {
      dvr: dvr(validatorjs),
    };
  }

  /*
    Return the `fields` as a collection into the `setup()` method
    with a `rules` property for the validation.
  */
  setup() {
    return {
      fields: [
        {
          name: "Name",
          label: "model name",
          placeholder: "Insert model's name",
          rules: "required|string|between:1,5",
          value: ''
        }
      ]
    };
  }

  /*
    Event Hooks
  */
  hooks() {
    return {
      /*
        Success Validation Hook
      */
      onSuccess(form) {
        // get field values
        // this.vehicleModelStore.add(this.form.values(), this.makeID)
        return form.values();
      },
      /*
        Error Validation Hook
      */
      onError(form) {
        alert('Form has errors!');
        // get all form errors
        console.log('All form errors', form.errors());
      }
    };
  }
}

export default VehicleModelForm;