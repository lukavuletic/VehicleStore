import BaseForm from '../../Common/BaseForm';

// define field name value for form
const fields = ['Name', 'MakeId'];

// define label values for form
const labels = {
    Name: 'Model name',
    MakeId: 'Make name',
};

// define placeholder values for form
const placeholders = {
    Name: 'Insert model\'s name',
    MakeId: 'Insert model\'s name',
};

// class that defines form
class VehicleModelForm extends BaseForm {
    constructor(hooks, values) {
        super({ fields, labels, placeholders, values }, { hooks })
    }

}

export default VehicleModelForm;