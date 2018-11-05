import axios from 'axios';
 
export const INIT_CLAIM_RECORD_REQUEST = "INIT_CLAIM_RECORD_REQUEST";
export const FETCH_CLAIM_RECORD_REQUEST_COMPLETE = "FETCH_CLAIM_RECORD_REQUEST_COMPLETE";
export const FETCH_CLAIM_RECORD_HEADER_REQUEST_COMPLETE = "FETCH_CLAIM_RECORD_HEADER__REQUEST_COMPLETE";

const headers = {headers: {'content-type': 'application/json'}};
//const Config = require('Config');

export function initClaimRequest(){
    return {
      type: INIT_CLAIM_RECORD_REQUEST,
    }
}

export function fetchClaimHeader(){
    return function(dispatch){
        axios.get('http://localhost:8080/header',headers)
            .then(response => {
                console.log(response.data)
                dispatch(fetchClaimHeaderComplete(response.status, response.data));
            })
            .catch(function (error) {
                const { response } = error;
               
                console.log(response)
                dispatch(fetchClaimHeaderComplete(response.status, response.data));
            });
    }
}


export function fetchClaimRecord(){
    return function(dispatch){
        dispatch(initClaimRequest());

        // axios[method.toLowerCase()](`http://payments-tsta.ose-dev.bcbsfl.com/data/v1/balances/accountBalances`).then(response => {
        axios.get('http://localhost:8080/claim',headers)
            .then(response => {
                dispatch(fetchClaimRecordComplete(response.status, response.data));
            })
            .catch(function (error) {
                const { response } = error;
               
                console.log(response)
                dispatch(fetchClaimRecordComplete(response.status, response.data));
            });
    }
}

export function fetchClaimHeaderComplete(status,data){
    return{
        type :FETCH_CLAIM_RECORD_HEADER_REQUEST_COMPLETE,
        status,
        data
    }
}

export function fetchClaimRecordComplete(status, data){
	return {
		type: FETCH_CLAIM_RECORD_REQUEST_COMPLETE,
		status,
		data
	}
}