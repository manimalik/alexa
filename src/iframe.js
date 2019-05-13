import React, { Component } from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Page, Card,Heading,DisplayText,Link} from '@shopify/polaris';

class Iframe extends Component {	
	
	render() {
		return (
			<AppProvider>
	    		<Page>
			      <Card sectioned>
			      		<iframe width="100%" src="https://briefify.coldsmoke.co/alexa_staging/" id="iframe"></iframe>
			      </Card>
			    </Page>
			</AppProvider>
		);
	}
}

export default Iframe;