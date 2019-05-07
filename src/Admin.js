import React, { Component } from "react";
import "./App.css";
import "@shopify/polaris/styles.css";
import {
  AppProvider,
  Page,
  Card,
  FormLayout,
  Form,
  Button,
  TextField,
  Heading
} from "@shopify/polaris";

class Admin extends Component {
  defaultState = {
    username: "",
    password: ""
  };

  constructor(props) {
    super(props);

    // Set the default state immediately
    this.state = this.defaultState;
  }

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  handleSubmit = event => {
    fetch("https://briefify.coldsmoke.co/alex/files/auth.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        if (responseJson.status == "1") {
          localStorage.setItem("login", responseJson.status);
          window.location.href = "dashboard";
        }
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  componentDidMount = () => {
    //localStorage.setItem('login', "1");
  };

  render() {
    const cachedHits = localStorage.getItem("login");
    if (cachedHits === "1") {
      window.location.href = "dashboard";
    }
    const { username, password } = this.state;
    return (
      <AppProvider>
        <Page>
          <Card sectioned>
            <Heading>Login Form</Heading>
            <br />
            <Form action="" method="post" onSubmit={this.handleSubmit}>
              <FormLayout>
                <TextField
                  value={username}
                  label="Username"
                  onChange={this.handleChange("username")}
                />
                <TextField
                  value={password}
                  label="Password"
                  type="password"
                  onChange={this.handleChange("password")}
                />
                <Button id="BtnTextStyle" submit>
                  Login
                </Button>
              </FormLayout>
            </Form>
          </Card>
        </Page>
      </AppProvider>
    );
  }
}
export default Admin;
