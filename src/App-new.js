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
  Modal,
  TextContainer,
  Icon,
  ProgressBar,
  Heading,
  Subheading,
  Stack,
  Caption,
  Banner,
  List,
  DropZone,
  Tabs
} from "@shopify/polaris";
import $ from "jquery";
import Recorder from "react-mp3-recorder";
import ReactAudioPlayer from "react-audio-player";
import blobToBuffer from "blob-to-buffer";

class App extends Component {
  defaultState = {
    featured_discount: "",
    product_collection: "",
    general_announcement: "",
    count: 0,
    active: false,
    text: "Collecting Information",
    progress: 0,
    files: [],
    blob: "",
    rejectedFiles: [],
    hasError: false,
    selectedTab: 0,
    url: ""
  };

  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    // Set the default state immediately
    this.state = this.defaultState;
    console.log(this.props.shopName);
  }

  handleChange = field => {
		console.log(this.replaceAll(value, "&", "and"));
    return value =>
      this.setState({ [field]: this.replaceAll(value, "&", "and") });
  };

  replaceAll = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), "g"), replace);
  };

  handleModalChange = () => {
    this.setState(({ active }) => ({ active: !active }));
  };

  handleTabChange(selectedTab) {
    this.setState({ selectedTab });
  }

  handleSubmit = event => {
    var formData = new FormData();
    if (
      $.isEmptyObject(this.state.files) &&
      !$.isEmptyObject(this.state.blob)
    ) {
      formData.append("file", this.state.blob);
    } else if (
      !$.isEmptyObject(this.state.files) &&
      $.isEmptyObject(this.state.blob)
    ) {
      formData.append("file", this.state.files[0]);
    }
    formData.append("featured_discount", this.state.featured_discount);
    formData.append("product_collection", this.state.product_collection);
    formData.append("general_announcement", this.state.general_announcement);
    formData.append("shop", this.props.shopName);

    fetch("files/data.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ message: responseJson.message, active: true });
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  render() {
    const {
      featured_discount,
      product_collection,
      general_announcement,
      count,
      active,
      progress,
      text,
      files,
      hasError,
      rejectedFiles,
      selectedTab,
      url
    } = this.state;

    const fileUpload = !files.length && <DropZone.FileUpload />;
    const uploadedFiles = files.length > 0 && (
      <Stack vertical>
        {files.map((file, index) => (
          <Stack alignment="center" key={index}>
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );

    const errorMessage = hasError && (
      <Banner
        title="The following images couldn’t be uploaded:"
        status="critical"
      >
        <List type="bullet">
          {rejectedFiles.map((file, index) => (
            <List.Item key={index}>
              {`"${file.name}" is not supported. File type must be .mp3.`}
            </List.Item>
          ))}
        </List>
      </Banner>
    );

    const tabs = [
      {
        id: "tab1",
        content: "Text",
        panelID: "panel2"
      },
      {
        id: "tab2",
        content: "Audio",
        panelID: "panel2"
      }
    ];

    const tabPanels = [
      <Tabs.Panel id="panel1">
        <Card sectioned>
          <Form action="" method="post" onSubmit={this.handleSubmit}>
            <FormLayout>
              <TextField
                value={featured_discount}
                label="Featured Discount"
                onChange={this.handleChange("featured_discount")}
              />
              <TextField
                value={product_collection}
                label="Product Collection"
                onChange={this.handleChange("product_collection")}
              />
              <TextField
                value={general_announcement}
                label="General Announcement"
                onChange={this.handleChange("general_announcement")}
              />
              <Button id="BtnTextStyle" submit>
                Save
              </Button>
            </FormLayout>
          </Form>
        </Card>
      </Tabs.Panel>,
      <Tabs.Panel id="panel2">
        <Card sectioned>
          <Form action="" method="post" onSubmit={this.handleSubmit}>
            <FormLayout>
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                  }}
                >
                  <div>
                    <br />
                    <br />
                    <Recorder
                      onRecordingComplete={this._onRecordingComplete}
                      onRecordingError={this._onRecordingError}
                      style={{
                        margin: "0 auto"
                      }}
                    />
                    <p>Click and hold to start recording mp3.</p>
                    {url && (
                      <div>
                        <ReactAudioPlayer
                          src={url}
                          controls
                          style={{
                            minWidth: "500px"
                          }}
                        />
                      </div>
                    )}
                    <br />
                    <br />
                    <strong>OR</strong>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
              <Stack vertical>
                {errorMessage}
                <DropZone
                  accept="audio/mp3"
                  type="file"
                  onDrop={(files, acceptedFiles, rejectedFiles) => {
                    this.setState({
                      files: [...this.state.files, ...acceptedFiles],
                      rejectedFiles: rejectedFiles,
                      hasError: rejectedFiles.length > 0,
                      blob: ""
                    });
                  }}
                >
                  {uploadedFiles}
                  {fileUpload}
                </DropZone>
              </Stack>
              <p>
                <strong>Note :</strong> Please see the{" "}
                <a
                  rel="noopener noreferrer"
                  href="https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content"
                  target="_blank"
                >
                  link
                </a>{" "}
                and go through the guide before uploading audio content in alexa
                skill{" "}
              </p>
              <Button id="BtnAudioStyle" submit>
                Save
              </Button>
            </FormLayout>
          </Form>
        </Card>
      </Tabs.Panel>
    ];

    if (this.state.count === 0) {
      fetch("files/show.php?shop=" + this.props.shopName, {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: 0
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            featured_discount: responseJson.featured_discount,
            product_collection: responseJson.product_collection,
            general_announcement: responseJson.general_announcement,
            progress: responseJson.precentage,
            text: responseJson.textProgress
          });
          if (this.state.progress <= 40) {
            $(".Polaris-ProgressBar__Indicator").addClass("red");
          } else if (this.state.progress <= 70) {
            $(".Polaris-ProgressBar__Indicator").addClass("orange");
          } else {
            $(".Polaris-ProgressBar__Indicator").addClass("green");
          }
        })
        .catch(error => {
          this.setState({ message: error });
        });
      this.setState({
        count: 1
      });
    }

    return (
      <AppProvider>
        <Page>
          <Card sectioned>
            <Heading h1>App Submission Progress</Heading>
            <Subheading>
              {this.state.text} - {this.state.progress}% Completed
            </Subheading>
            <ProgressBar progress={this.state.progress} size="large" />
          </Card>
          <Tabs
            selected={selectedTab}
            tabs={tabs}
            onSelect={this.handleTabChange}
          />
          {tabPanels[selectedTab]}
          <Modal
            open={active}
            onClose={this.handleModalChange}
            title="Alexa Submission"
            primaryAction={{
              content: "OK",
              onAction: this.handleModalChange
            }}
          >
            <Modal.Section>
              <TextContainer>
                <Icon source="save" color="green" />
                <p className="Savetext">
                  Your Alexa Briefing is successfully saved.
                </p>
              </TextContainer>
            </Modal.Section>
          </Modal>
        </Page>
      </AppProvider>
    );
  }

  _onRecordingComplete = blob => {
    blobToBuffer(blob, (err, buffer) => {
      if (err) {
        console.error(err);
        return;
      }
      this.setState({ blob: blob, files: [] });
      if (this.state.url) {
        window.URL.revokeObjectURL(this.state.url);
      }

      this.setState({
        url: window.URL.createObjectURL(blob)
      });
    });
  };

  _onRecordingError = err => {
    console.log("error recording", err);

    if (this.state.url) {
      window.URL.revokeObjectURL(this.state.url);
    }

    this.setState({ url: null });
  };
}

export default App;
