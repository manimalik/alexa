import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '@shopify/polaris/styles.css';
import {AppProvider, Page, Card,FormLayout,Form,DataTable, Button,TextField} from '@shopify/polaris';

class App extends Component {	

  state = {
    featured_discount: "",
    product_collection: "",
    general_announcement: "",
    show_featured : "",
    show_product : "",
    show_general : "",
    count : 0
  };

  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };

  handleSubmit = (event) => {
    fetch('https://briefify.coldsmoke.co/alex/data.php', {
	  method: 'POST',
	  headers: {
	    Accept: 'application/json',
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    featured_discount: this.state.featured_discount,
	    product_collection: this.state.product_collection,
	    general_announcement: this.state.general_announcement,
	  }),
	}).then((response) => response.json())
	.then((responseJson) => {
      this.setState({message: responseJson.message});
      window.location.reload(true);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  render() {
  	const {featured_discount,product_collection,general_announcement,show_featured,show_product,show_general,count} = this.state;

  	if( this.state.count == 0 ) {
	  	fetch('https://briefify.coldsmoke.co/alex/show.php', {
		  method: 'GET',
		}).then((response) => response.json())
		.then((responseJson) => {
	      console.log(responseJson);
	      this.setState({
	      	show_featured: responseJson.featured_discount,
	      	show_product: responseJson.product_collection,
	      	show_general: responseJson.general_announcement
	      });
	    })
	    .catch((error) => {
	      console.log(error);
	    });
	    this.setState({
	    	count : 1
	    });
	}
    const rows = [[show_featured,show_product,show_general]]
    
    return (
     <AppProvider>
	    <Page title="Alexa App">
	      <Card>
	      	<table><tr><td>headings</td></tr></table>
	      	<DataTable
	            columnContentTypes={[
	              'text',
	              'text',
	              'text',
	            ]}
	            headings={[
	              'Featured Discount',
	              'Product Collection',
	              'General Announcement',
	            ]}
	            rows={rows}
	          />
	      </Card>
	      <Card sectioned>	
		      <Form action="" method="post" onSubmit={this.handleSubmit}>
	        	<FormLayout>
			      	<TextField
				      	value={featured_discount}
				        label="Featured Discount"
				         onChange={this.handleChange('featured_discount')}
				      />
				    <TextField
				      	value={product_collection}
				        label="Product Collection"
				         onChange={this.handleChange('product_collection')}
				      />
				    <TextField
				      	value={general_announcement}
				        label="General Announcement"
				         onChange={this.handleChange('general_announcement')}
				      />
			        <Button submit>Save</Button>
			        {!!this.state.message && <div>{this.state.message}</div>}
			     </FormLayout>
	      	  </Form>
	      </Card>
	    </Page>
	  </AppProvider>
    );
  }
}

export default App;
