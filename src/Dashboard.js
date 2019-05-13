import React, { Component } from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Page, Card,FormLayout,Form, Button,Heading,Select,Modal,TextContainer,Icon} from '@shopify/polaris';


class Dashboard extends Component {	
	state = {
		selectedStatus : '',
		selectedStore : '',
		message : '',
		active : false,
		count : 0,
		options : '',
		activeModal : false,
	}
	
	handleModalChange = () => {
		this.setState(({activeModal}) => ({activeModal: !activeModal}));
	};

	handleStatusChange = (newValue) => {
		this.setState({selectedStatus : newValue});
	};

	handleSubmit = (event) => {
	    fetch('https://briefify.coldsmoke.co/alexa_staging/files/submit_progress.php', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		    'Cache-Control': 'no-cache, no-store, must-revalidate',
	    	'Pragma': 'no-cache',
	    	'Expires': 0
		  },
		  body: JSON.stringify({
		    selectedStore: this.state.selectedStore,
		    selectedStatus: this.state.selectedStatus,
		  }),
		}).then((response) => response.json())
		.then((responseJson) => {
	      this.setState({message: responseJson.message,activeModal : true});
	    })
	    .catch((error) => {
	      this.setState({message: error});
	    });
  	};

	handleChange = (newValue) => {
		this.setState({selectedStore : newValue});
		fetch('https://briefify.coldsmoke.co/alexa_staging/files/getProgress.php', {
		  method: 'POST',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		    'Cache-Control': 'no-cache, no-store, must-revalidate',
	    	'Pragma': 'no-cache',
	    	'Expires': 0
		  },
		  body: JSON.stringify({
		    store: newValue,
		  }),
		}).then((response) => response.json())
		.then((responseJson) => {
		  if( responseJson.collect_information ) {
		  		this.setState({selectedStatus : 'collect-information'});
		  } else if( responseJson.submit_approval ) {
		  		this.setState({selectedStatus : 'submit-approval'});
		  } else if( responseJson.approved ) {
		  		this.setState({selectedStatus : 'approved'});
		  } else {
		  		this.setState({selectedStatus : ''});
		  }
		  this.setState({active : true});
	    })
	    .catch((error) => {
	      this.setState({selectedStatus: '',active : false});
	    });

	};
	render() {
		const { active,count,options,activeModal } = this.state;
		const cachedHits = localStorage.getItem('login');
		console.log(cachedHits);
	    if (cachedHits === null) {
	    	window.location.href = "/alexa_staging/admin";
	    }
	    if( this.state.count === 0 ) {
		    fetch('https://briefify.coldsmoke.co/alexa_staging/files/fetch_shops.php', {
			  method: 'GET',
			  headers: {
			    'Cache-Control': 'no-cache, no-store, must-revalidate',
		    	'Pragma': 'no-cache',
		    	'Expires': 0
			  },
			}).then((response) => response.json())
			.then((responseJson) => {
		      	this.setState({options :responseJson});
		    })
		    .catch((error) => {
		      //const responseJson =[{"label":"--Select Status--","value":""},{"label":"flash-sale-theme","value":"flash-sale-theme.myshopify.com"},{"label":"besthivestore","value":"besthivestore.myshopify.com"}];

		      this.setState({message: error,options:''});
		    });
		    this.setState({count : 1});
		}
	    
	    const optionsStatus = [
	    	{label : '--Selected--', value: ''},
	    	{label : 'Collect Information', value: 'collect-information'},
	    	{label : 'Approval Submission', value: 'submit-approval'},
	    	{label : 'Approved & Publised', value: 'approved'},
	    ];
		return(
			<AppProvider>
	    		<Page>
			    	<Card sectioned>
			      		<Heading>Dashboard</Heading>
			      		<br/>
			      		<Form action="" method="post" onSubmit={this.handleSubmit}>
			      			<FormLayout>
				      			<Select
							        label="Select Store"
							        options={options}
							        onChange={this.handleChange}
							        value={this.state.selectedStore}
							      />
						        {active === true &&
	        						<Select
								        label="Select Status"
								        options={optionsStatus}
								        onChange={this.handleStatusChange}
								        value={this.state.selectedStatus}
								      />							   
						        }
						        {active === true && 
						        	<Button id="BtnStyle" submit>Save</Button>
						        }

					        </FormLayout>
	        			</Form>
	        			<Modal
				          open={activeModal}
				          onClose={this.handleModalChange}
				          title="App Status"
				          primaryAction={{
				            content: 'OK',
				            onAction: this.handleModalChange,
				          }}
				        >
				          <Modal.Section>
				            <TextContainer>
				              <Icon source="save" color="green" /> 
											<p className="Savetext">
											Successfully saved entry.
				              </p>
				            </TextContainer>
				          </Modal.Section>
				        </Modal>
			  		</Card>
	    		</Page>
	  		</AppProvider>
		);
	}
}

export default Dashboard;