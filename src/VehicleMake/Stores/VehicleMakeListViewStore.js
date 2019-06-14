import {observable, computed, action} from 'mobx';

class VehicleMakeListViewStore {    
    constructor(moduleStore){
        // define routes to navigate through architecture of the app
        this.moduleStore = moduleStore;
		this.vehicleMakeStore = moduleStore.vehicleMakeStore;
	}
	
	// define params to be tracked and passed into computed items find method
	@observable	page = 0; 
	@observable	rpp = 10;
	@observable	searchString = '';
	@observable	orderBy = 'id';
	@observable	orderDirection = 'desc';
	
    // track data from ModelStore
    @computed get items() {
		return this.vehicleMakeStore.find(this.searchString, this.page, this.rpp, this.orderBy, this.orderDirection);
	}

	// method that receives id of clicked model
	@action.bound
	deleteItem(e){
		// execute delete method from ModelStore, pass id into it
		this.vehicleMakeStore.delete(e.target.value);
	}

	// method that receives page that user is currently looking at
	@action.bound
	setPage(newPage) {
		// page validation
		if(newPage < 0) {
			newPage = 0;
		}

		// change current page's value
		this.page = newPage;
	}

	// method that tells pager which page are we on
	@action.bound
	handleSkip(newPage){
		this.page = newPage
	}

	// method that changes total results per page
	@action.bound
	setRpp(e) {
		// rpp validation
		if(e.target.value < 10) {
			e.target.value = 10;
		}

		// change current rpp's value
		this.rpp = e.target.value;
	}

	// method that changes current search string in page's input field
	@action.bound
	setSearchString = (e) => {
		// change current searchString's value
		this.searchString = e.target.value;
	}

	// method that changes current order direction
	@action.bound
	setOrderDirection() {
		// swap orderDirection
		if(this.orderDirection === 'desc'){
			this.orderDirection = 'asc';
		}else{
			this.orderDirection = 'desc';
		}
	}

	// method that changes parameter that user is ordering by
	@action.bound
	setOrderBy(newOrderBy) {
		// change parameter that user is ordering by
		this.orderBy = newOrderBy;
	}
}

export default VehicleMakeListViewStore;