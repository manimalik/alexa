import React, { Component } from 'react';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Page, Card,Heading,DisplayText,Link,Button} from '@shopify/polaris';

class Explainer extends Component {	
	
	render() {
		return (
			<AppProvider>
	    		<Page>
			      <Card sectioned>
			      		<Heading>Alexa App Explanation</Heading>
			      		<br/>
			      		<DisplayText size="small">We take your info and submit to amazon to create your very own skill, they review it and approve, and then you can reach your customers via their Alexa Flash Briefings.</DisplayText>
			      		<br/>
								<Button id="BtnTextStyle" url="/alexa_staging/collect-info" submit> Next </Button>
			      </Card>
			    </Page>
			</AppProvider>
		);
	}
}

export default Explainer;