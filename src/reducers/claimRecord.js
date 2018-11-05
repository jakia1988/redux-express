import { Map } from 'immutable';
import * as Actions from '../actions/claimRecord';
import * as GlobalConstants from '../constants/global';

const ClaimRecordReducer = (state, action) => {
	// default initlization of the reducer. 
	if (typeof state === 'undefined') { 
		return new Map().withMutations((m) => {
			m.set(GlobalConstants.PROP_INITIALIZED, false);
			m.set(GlobalConstants.PROP_FETCHING, false);
		});
	}

	switch(action.type) {
        case Actions.FETCH_CLAIM_RECORD_REQUEST_COMPLETE:
			return [action.data];	
		default:
			console.log("Default account balances reducer");
			return state;
	}
}

export default ClaimRecordReducer;