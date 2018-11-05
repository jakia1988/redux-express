import { combineReducers } from 'redux';
import ClaimRecordReducer from '../reducers/claimRecord'
import ClaimRecordHeaderReducer from '../reducers/claimRecordHeader'

const rootReducer = combineReducers({
	ClaimRecordReducer,
	ClaimRecordHeaderReducer
});

export default rootReducer;
