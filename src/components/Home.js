import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router';
import { bindActionCreators } from 'redux';
import {fetchClaimRecord,fetchClaimHeader} from '../actions/claimRecord'
import Table from './shared/Table'
class Home extends Component {
  constructor(props){
    super(props);
    this.state ={}
    this.props.record();
    this.props.header();
  } 

  render() {  
    const columns = [
      {
        name: "Received Date",
        key: "receiveddate",
        sort:true
      },
      {
        name: "Facility/Provider",
        key: "facilityprovider",
        sort:true
      },
      {
        name: "Service Type",
        key: "servicetype",
        sort:true
      },
      {
        name: "Status",
        key: "status",
        sort:true
      },
      {
        name: "Show Details",
        key: "showdetails",
        sort:false
      }
];
    
    return (
      <div>
       {this.props.claimHeader.length > 0 && <Table headers={columns} data={this.props.claimRecord}/>}
       
         </div>
    )
  }
}
function mapDispatchToProps(dispatch){
  return {
    record :  bindActionCreators(fetchClaimRecord, dispatch),
    header :  bindActionCreators(fetchClaimHeader, dispatch)
  }
}
function mapStateToProps(store){  
  return {
    claimRecord: store.ClaimRecordReducer,
    claimHeader : store.ClaimRecordHeaderReducer
  };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Home));
