import {observable, computed, action} from 'mobx';

class VehicleModelListViewStore {    
	@observable	page = 0; 
	@observable	rpp = 10;
	@observable	searchString = "";
	@observable	orderBy = "id";
	@observable	orderDirection = "desc";

    @computed get items() {
		return this.vehicleModelStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
	}

    constructor(moduleStore){
        this.moduleStore = moduleStore;
		this.vehicleModelStore = moduleStore.vehicleModelStore;
    }

	@action.bound
	deleteItem(e){
		let id = e.target.value;
		return this.vehicleModelStore.delete(id);
	}

	@action.bound
	setPage(newPage) {
		if(newPage < 0) {
			newPage = 0;
		}

		this.page = newPage;
	}

	@action.bound
	handleSkip(newPage){
		this.page = newPage
	}

	@action.bound
	setRpp(e) {
		let newRpp = e.target.value;
		if(newRpp < 10) {
			newRpp = 10;
		}

		this.rpp = newRpp;
	}

	@action.bound
	setSearchString = (e) => {
		this.searchString = e.target.value;
	}

	@action.bound
	setOrderDirection() {
		if(this.orderDirection === 'desc'){
			this.orderDirection = 'asc';
		}else{
			this.orderDirection = 'desc';
		}
	}

	@action.bound
	setOrderBy(newOrderBy) {
		this.orderBy = newOrderBy;
	}
}

export default VehicleModelListViewStore;