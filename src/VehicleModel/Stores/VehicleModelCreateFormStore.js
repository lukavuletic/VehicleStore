import { Form } from 'mobx-react-form';

class VehicleModelCreateFormStore extends Form {
    constructor(fields) {
		super({fields}, {
			onSuccess: (form) => {
                
            },
			onError: (form) => {

            }
		});
	}
}

export default VehicleModelCreateFormStore;