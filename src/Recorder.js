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
  Spinner,
  Popover,
  DatePicker,
  Tabs,
  Select
} from "@shopify/polaris";
import $ from "jquery";
import Recorder from "react-mp3-recorder";
import ReactAudioPlayer from "react-audio-player";
import blobToBuffer from "blob-to-buffer";
import moment from "moment";

class RecorderScreen extends Component {
  defaultState = {
    featured_discount: "",
    product_collection: "",
    general_announcement: "",
    count: 0,
    active: false,
    record_id: 0,
    text: "Collecting Information",
    progress: 0,
    files: [],
    blob: "",
    rejectedFiles: [],
    hasError: false,
    selectedTab: 0,
    url: "",
    postTitle: "",
    popOverActive: false,
    dateHour : "'"+moment().add(15,'minutes').format("h")+"'",
    todayHour : "'"+moment().add(15,'minutes').format("h")+"'",
    todayAmPm : moment().add(15,'minutes').format("a"),
    minute : "'"+moment().add(15,'minutes').format("m")+"'",
    todayMinute: "'"+moment().add(15,'minutes').format("m")+"'",
    dateTimezone:moment().add(15,'minutes').format("a"),
    briefDateTime: moment().format("MMM D, YYYY h:mm a"),
    month: new Date().getMonth(),
    year: 2019,
    newDate : new Date(),
    feedTime: moment().format("h:mm a"), //;"02:30 PM",
    selected: {
      start: new Date(),
      end: new Date()
    },
    shopID: 0,
    paidStore: true,
  };

  constructor(props) {
    super(props);
    this.handleTabChange = this.handleTabChange.bind(this);
    // Set the default state immediately
    this.state = this.defaultState;
    console.log(this.props.shopName);
  }

  handleMinuteChange = (newValue) => {

    if( parseInt(newValue.replace(/'/g,'')) >= parseInt(this.state.todayMinute.replace(/'/g,''))) {
      this.setState({
        minute: newValue,
      });

    }

    if( parseInt(moment(this.state.selected.start).format("DD")) > parseInt(moment().format("DD")) ) {
      this.setState({
        minute: newValue,
      });
    }
  };

  handleDateHourChange = (newValue) => {

    var checkTimezone = this.state.dateTimezone;

    if( checkTimezone == 'pm' ) {
      if( parseInt(this.state.todayHour.replace(/'/g,'')) == 12 ) {
         this.setState({dateHour: newValue}); 
      }
    }
    if( this.state.todayAmPm == 'pm' ) {
      if( checkTimezone != 'am' ) {
        if( parseInt(newValue.replace(/'/g,'')) >= parseInt(this.state.todayHour.replace(/'/g,'')) ) {
          this.setState({dateHour: newValue});
        }
      }
    } else {
      if( parseInt(newValue.replace(/'/g,'')) >= parseInt(this.state.todayHour.replace(/'/g,'')) ) {
          this.setState({dateHour: newValue});
      }
    }

    if( parseInt(moment(this.state.selected.start).format("DD")) > parseInt(moment().format("DD")) ) {
      this.setState({
        dateHour: newValue,
      });
    }
  };

  handleTimeZoneChange = (newValue) => {
    if( parseInt(moment(this.state.selected.start).format("DD")) > parseInt(moment().format("DD")) ) {
        this.setState({dateTimezone: newValue});
    } else {
      if( this.state.todayAmPm != 'pm' ) {
        this.setState({dateTimezone: newValue});
      }
    }
    
  };

  handleTimeChange = field => {
    return value => {
        console.log(this.state.briefDateTime+' '+value);
        this.setState({
          [field]: value,
          briefDateTime: moment(
            (this.state.selected.start + "").replace("00:00:00", value)
          ).format("MMM DD, YYYY hh:mm a")
        });

        if( moment(value, 'h:mm a',true).isValid() ) {
          this.setState({isEnable : false});
        } else {
          this.setState({isEnable : true});
        }
    };
  };

  handleDateChange = value => {
    console.log(value.start);
    console.log(this.state.selected);
    this.setState({
      selected: value,
      newDate:value,
      dateSet: moment((value.start + "").replace("00:00:00", this.state.dateHour.replace(/'/g,'')+":"+this.state.minute.replace(/'/g,'')+":00")).format("MMM DD, YYYY hh:mm a")
    });
  };

  handleMonthChange = (month, year) => {
    this.setState({
      month,
      year
    });
  };

  togglePopover = val => {
    this.state.selected.start.setHours(0);
    this.state.selected.start.setMinutes(0);
    this.state.selected.start.setSeconds(0);
    var dateUpdate = 0;
    if( this.state.dateTimezone == 'pm' ) {
      dateUpdate = parseInt(this.state.dateHour.replace(/'/g,''));
      if( dateUpdate != 12 ) {
          dateUpdate = dateUpdate + 12;
      }
    } else {
      dateUpdate = parseInt(this.state.dateHour.replace(/'/g,''));
    } 
    this.setState({
      briefDateTime: moment((this.state.selected.start + "").replace("00:00:00", dateUpdate+":"+this.state.minute.replace(/'/g,'')+":00")).format("MMM DD, YYYY hh:mm a")
    });
    this.setState(({ popOverActive }) => {
      return { popOverActive: val };
    });
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  handleModalChange = () => {
    this.setState(({ active }) => ({ active: !active }));
  };

  handleTabChange(selectedTab) {
    this.setState({ selectedTab });
  }

  handleSubmit = event => {

    var formData = new FormData();
    if(this.state.url) {
      var sameFile =  this.state.url;
    }

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
    } else if ( sameFile ) {
      formData.append("file",sameFile);
    }
    /*formData.append("featured_discount", this.state.featured_discount);
    formData.append("product_collection", this.state.product_collection);
    formData.append("general_announcement", this.state.general_announcement);*/
    formData.append("pub_date", this.state.briefDateTime);
    formData.append("feed_title", this.state.postTitle);
    formData.append("store_id", this.state.shopID);
    formData.append("record_id", this.props.recordID);
    fetch("/alexa_staging/files/additem.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ message: responseJson.message, active: true });
        window.opener.location.reload();
        //window.opener.app.showBriefingCountDown();
        window.close();
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  componentDidMount = () => {

    if( this.props.recordID ) {
      var getShopUrl = "/alexa_staging/files/show.php?shop=" + this.props.shopName + "&record_id="+this.props.recordID;
    } else {
      var getShopUrl = "/alexa_staging/files/show.php?shop=" + this.props.shopName;
    }
    fetch(getShopUrl, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.id == "") {
          window.location.href = "intro";
        } else {
          console.log(responseJson);
          if( this.props.recordID ) {
            var publistDate = moment(responseJson.local_time).format("MMM D, YYYY h:mm a");
            this.setState({
              url : "https://briefify.coldsmoke.co/alexa_staging/uploads/" + responseJson.audio,
              postTitle : responseJson.title,
              briefDateTime : publistDate,
              progress: responseJson.precentage,
              paidStore: responseJson.paid_store,
              shopID: responseJson.id,
            });
          } else {
            this.setState({
              progress: responseJson.precentage,
              paidStore: responseJson.paid_store,
              shopID: responseJson.id,
            });
          }
          if (this.state.progress <= 40) {
            $(".Polaris-ProgressBar__Indicator").addClass("red");
          } else if (this.state.progress <= 70) {
            $(".Polaris-ProgressBar__Indicator").addClass("orange");
          } else if ( this.state.progress == 100 ) {
            $(".Polaris-ProgressBar__Indicator").hide();
             $(".Polaris-ProgressBar__Indicator").addClass("green");
          } else {
            $(".Polaris-ProgressBar__Indicator").addClass("green");
          }
        }
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
      url,
      month,
      year,
      selected,
      feedTime,
      briefDateTime,
      popOverActive,
      postTitle,
      dateHour,
      minute
    } = this.state;

    const activator = (
      <TextField
        value={briefDateTime}
        label="Publish Date and Time"
        readOnly={true}
        prefix={<Icon source="calendar" color="black" />}
        onFocus={() => this.togglePopover(true)}
      />
    );

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

    const dateHours  = [];
    for( var i = 0;i <= 12; i++  ) {
      dateHours.push({label: i, value : "'"+i+"'"});
    }
    const minutes  = [];

    for( var i = 0;i <= 60; i++  ) {
      minutes.push({label: i, value : "'"+i+"'"});
    }

    const timezone  = [
    { label:'am',value:'am'},
    { label:'pm',value:'pm'},
    ];

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

    return (
      <AppProvider>
        <Page>
          <Modal
            open={active}
            size="Medium"
            onClose={this.handleModalChange}
            title="Alexa Submission "
            primaryAction={{
              content: "OK",
              onAction: this.handleModalChange
            }}
          >
            <Modal.Section>
              <TextContainer>
                <Icon source="save" color="green" />
                <p className="Savetext">
                  Your Alexa Briefing is successfully saved.{" "}
                </p>
              </TextContainer>
            </Modal.Section>
          </Modal>

          <Card sectioned>
            <Form action="" method="post" onSubmit={this.handleSubmit}>
              <FormLayout>
                <TextField
                  value={postTitle}
                  label="Title"
                  onChange={this.handleChange("postTitle")}
                />
                <Popover
                  active={popOverActive}
                  activator={activator}
                  fullHeight={true}
                  onClose={() => this.togglePopover(false)}
                  preferredAlignment="right"
                  preferredPosition="below"
                  sectioned
                >
                  <FormLayout>
                    <FormLayout.Group condensed>
                    <Popover.Pane fixed>
                      
                      <DatePicker
                        month={month}
                        year={year}
                        selected={selected}
                        allowRange={false}
                        onChange={this.handleDateChange}
                        onMonthChange={this.handleMonthChange}
                      />
                    </Popover.Pane>
                    </FormLayout.Group>
                    <Popover.Pane fixed>
                      <FormLayout.Group condensed>
                      <Select
                      label="Hours"
                      options={dateHours}
                      onChange={this.handleDateHourChange}
                      value={this.state.dateHour}
                      />
                      
                      <Select
                        label="Minutes"
                        options={minutes}
                        onChange={this.handleMinuteChange}
                        value={this.state.minute}
                      />
                      <Select
                        label="AM/PM"
                        options={timezone}
                        onChange={this.handleTimeZoneChange}
                        value={this.state.dateTimezone}
                      />
                      <Button size="slim" fullWidth={true}
                  onClick={() => this.togglePopover(false)}
                  >Apply</Button> 
                      </FormLayout.Group>
                    </Popover.Pane>
                    
                    
                  </FormLayout>
                </Popover>
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
                    </div>
                  </div>
                </div>
                <p>
                  <strong>Note :</strong> Please see the{" "}
                  <a
                    rel="noopener noreferrer"
                    href="https://developer.amazon.com/docs/flashbriefing/flash-briefing-skill-api-feed-reference.html#cert-audio-content"
                    target="_blank"
                  >
                    link
                  </a>{" "}
                  and go through the guide before uploading audio content in
                  alexa skill{" "}
                </p>
                <Button id="BtnAudioStyle" submit>
                  {" "}
                  Publish and Close{" "}
                </Button>
              </FormLayout>
            </Form>
          </Card>
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

export default RecorderScreen;
