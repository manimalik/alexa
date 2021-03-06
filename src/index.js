import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Explainer from './Explainer';
import Iframe from './iframe';
import Information from './Information';
import App from './App';
import Admin from './Admin';
import Dashboard from './Dashboard';
import Demo from './demo';
import RecorderScreen from './Recorder';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from "react-router-dom";
import $ from "jquery";
$(window).on('load',function() {
    $('iframe').attr('allow','microphone');
});
var url_string = window.location.href;
var url = new URL(url_string);
if( url.searchParams.get("shop") ) {
    var shopName = url.searchParams.get("shop");
} else {
    var shopName = "";
}
if( shopName ) {
    localStorage.setItem('shopName', shopName);
}

if( localStorage.getItem('shopName') ) {
    shopName = localStorage.getItem('shopName');
}
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
ReactDOM.render(
    <Router>
       <div>
        <Route exact path="/alex/external/record" render={(props) => <RecorderScreen shopName={shopName} {...props} />} />
        <Route exact path="/alex/demo" component={Demo} />
        <Route exact path="/alex/" render={(props) => <App shopName={shopName} {...props} /> }  />
        <Route exact path="/alex/iframe" component={Iframe} />
        <Route exact path="/alex/intro" render={(props) => <Explainer shopName={shopName} {...props} /> } />
        <Route exact path="/alex/collect-info" render={(props) => <Information shopName={shopName} {...props} /> } />
        <Route exact path="/alex/app" render={(props) => <App shopName={shopName} {...props} /> }  />
        <Route exact path="/alex/admin" component={Admin} /> 
        <Route exact path="/alex/admin/dashboard" component={Dashboard} />                                                                    
       </div>
    </Router>, document.getElementById('root')
);
if (module.hot) {
    module.hot.accept()
}
serviceWorker.unregister();
