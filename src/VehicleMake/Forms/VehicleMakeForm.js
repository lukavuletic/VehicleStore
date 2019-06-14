import BaseForm from '../../Common/BaseForm';

// define field name value for form
const fields = ['Name'];

// define label values for form
const labels = {
    Name: 'Model name'
};

// define placeholder values for form
const placeholders = {
    Name: 'Insert model\'s name'
};

// define rules for form inputs
const rules = {
    Name: 'required|string|between:1,25'
}

// class that defines form
class VehicleMakeForm extends BaseForm {
    constructor(hooks, values) {
        super({ fields, labels, placeholders, values, rules }, { hooks })
    }

}

export default VehicleMakeForm;