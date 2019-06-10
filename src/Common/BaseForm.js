import { Form } from 'mobx-react-form';

class BaseForm extends Form {
	constructor(fields) {
		super({fields}, {
			onSuccess: () => {},
			onError: () => {}
		});
	}
}

export default BaseForm;