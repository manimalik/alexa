import React, { Component } from "react";
import "./App.css";
import "@shopify/polaris/styles.css";
import { Redirect } from "react-router-dom";
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
  ButtonGroup,
  DatePicker,
  DataTable,
  CalloutCard,
  Popover,
  DisplayText,
  Tabs,
  Select
} from "@shopify/polaris";
import $ from "jquery";
import Recorder from "react-mp3-recorder";
import ReactAudioPlayer from "react-audio-player";
import blobToBuffer from "blob-to-buffer";
import moment from "moment";

class App extends Component {
  defaultState = {
    timer: 900,
    showBanner: false,
    showSuccessBanner: false,
    countDownTime: "00:00",
    featured_discount: "",
    product_collection: "",
    general_announcement: "",
    postTitle: "",
    postText: "",
    record_id: 0,
    last_update: "2019-04-24 4:24:00",
    count: 0,
    active: false,
    audioError: false,
    text: "Collecting Information",
    progress: 100,
    files: [],
    blob: "",
    rejectedFiles: [],
    hasError: false,
    selectedTab: 0,
    audio: "",
    url: "",
    shopID: 0,
    paidStore: true,
    dateHour : "'"+moment().add(15,'minutes').format("h")+"'",
    todayHour : "'"+moment().add(15,'minutes').format("h")+"'",
    todayAmPm : moment().add(15,'minutes').format("a"),
    minute : "'"+moment().add(15,'minutes').format("m")+"'",
    todayMinute: "'"+moment().add(15,'minutes').format("m")+"'",
    dateTimezone:moment().add(15,'minutes').format("a"),
    originalTime: moment().add(15,'minutes').format("h:mm a"), //;"02:30 PM",
    feedTime: moment().add(15,'minutes').format("h:mm a"), //;"02:30 PM",
    briefDateTime: moment().add(15,'minutes').format("MMM D, YYYY h:mm a"),
    dateSet:moment().add(15,'minutes').format("MMM D, YYYY h:mm a"),
    isEnable:false,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    popOverActive: false,
    postForm: false,
    confirmDelete: false,
    newDate : new Date(),
    selected: {
      start: new Date(),
      end: new Date()
    }
  };

  constructor(props) {
    super(props);
    //this.handleTabChange = this.handleTabChange.bind(this);
    // Set the default state immediately
    this.state = this.defaultState;
    // console.log(this.props);
    // console.log(this.props.shopName);
    window.app = this;
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
        console.log(value);
        this.setState({
          [field]: value,
            // briefDateTime: moment(
            //   (this.state.selected.start + "").replace("00:00:00", value)
            // ).format("MMM DD, YYYY hh:mm a")
        });
        console.log(this.state.feedTime);
        console.log(this.state.originalTime);
        if( this.state.feedTime < this.state.originalTime ) {
          this.setState({
            feedTime: moment().add(15,'minutes').format("h:mm a"),
            dateSet: moment(
              (this.state.dateSet + "").replace("00:00:00", this.state.feedTime)
            ).format("MMM DD, YYYY hh:mm a")
          });
        } else {

        }

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

  PublishedIcon = () => (
    <div
      style={{
        float: "right",
        marginLeft: "10px",
        marginTop: "2px",
        width: "12px",
        height: "12px",
        borderStyle: "solid",
        borderWidth: "0.5px",
        borderColor: "#fff",
        borderRadius: "6px",
        backgroundColor: "Green"
      }}
    />
  );

  convertUTCDateToLocalDate = date => {
    var newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000
    );

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours - offset);

    return newDate;
  };

  convertLocalDateToUTCDate = date => {
    console.log(date.getTimezoneOffset());
    var newDate = new Date(
      date.getTime() + date.getTimezoneOffset() * 60 * 1000
    );

    var offset = date.getTimezoneOffset() / 60;
    var hours = date.getHours();

    newDate.setHours(hours + offset);

    return newDate;
  };

  goForMonthlyPayment = () => {
    var formData = new FormData();

    formData.append("shop_id", this.state.shopID);

    fetch("files/pay.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        window.top.location.href =
          responseJson.recurring_application_charge.confirmation_url;
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  handlePostFormSubmit = () => {
    if (this.state.postTitle == "") return;

    if (this.state.selectedTab == "0" && this.state.postText == "") return;

    console.log(this.state);
    if(this.state.url) {
      var sameFile =  this.state.url;
    }
    else if (
      this.state.selectedTab == "1" &&
      $.isEmptyObject(this.state.files) &&
      $.isEmptyObject(this.state.blob)
    ) {
      this.setState({
        ...this.state,
        audioError: true
      });
      return false;
    }

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
    } else if ( sameFile ) {
      formData.append("file",sameFile);
    }
    console.log(""+moment(this.convertLocalDateToUTCDate(new Date(this.state.briefDateTime))).format("MMM, D Y HH:mm:ss"));
    formData.append("pub_date", ""+this.state.briefDateTime);
    formData.append("store_id", this.state.shopID);
    formData.append("feed_title", this.state.postTitle);
    formData.append("feed_text", this.state.postText);
    formData.append("record_id", this.state.record_id);
    console.log(formData);
    //formData.append("file", this.state.shopID);

    fetch("files/additem.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ postForm: false, postTitle:'', postText:'', record_id:'0',active:true });
        this.getSkillPosts(this.state.shopID); // Retrive Posts
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  handleModalChange = () => {
    this.setState(({ active }) => ({ active: !active }));
  };

  handleDeleteModalChange = () => {
    this.setState(({ confirmDelete }) => ({ confirmDelete: !confirmDelete }));
  };

  handleErrorModalChange = () => {
    this.setState(({ audioError }) => ({ audioError: !audioError }));
  };

  // handleTabChange(_selectedTab) {
  //   this.setState({
  //     ...this.state,
  //     selectedTab: _selectedTab
  //   });
  // }

  pad = (num, size) => {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  setContent = type => {
    this.setState({
      ...this.state,
      selectedTab: type == "text" ? 0 : 1
    });
    this.setState({
      url : "",
      feedTime: moment().format("h:mm a"), //;"02:30 PM",
      briefDateTime: moment().format("MMM D, YYYY h:mm a"),
      postTitle : "",
      postText :"",
      files: [],
      blob: "",
      rejectedFiles: [],
      hasError: false,
      record_id: 0,
    });
  };

  handleSubmit = event => {
    if (
      this.state.selectedTab == "1" &&
      $.isEmptyObject(this.state.files) &&
      $.isEmptyObject(this.state.blob)
    ) {
      this.setState({
        ...this.state,
        audioError: true
      });
      return false;
    }

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
    /*formData.append("featured_discount", this.state.featured_discount);
    formData.append("product_collection", this.state.product_collection);
    formData.append("general_announcement", this.state.general_announcement);*/
    formData.append(
      "is_textbriefing",
      this.state.selectedTab == "0" ? "1" : "2"
    );
    formData.append("shop", this.props.shopName);

    fetch("files/data.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          message: responseJson.message,
          is_textbriefing: responseJson.is_textbriefing,
          active: true,
          timer: 900,
          showBanner: true
        });
        this.startCountdown();
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  showBriefingCountDown = () => {
    this.getAppData();
    this.setState({
      showBanner: true,
      timer: 900
    });
    this.startCountdown();
    console.log("Called From Outside");
  };

  startCountdown = () => {
    if (this.timer) clearInterval(this.timer);

    this.timer = setInterval(() => {
      if (this.state.timer - 1 < 1) {
        clearInterval(this.timer);
        this.closeBanner(true);
      }

      this.setState({
        ...this.state,
        timer: this.state.timer - 1,
        countDownTime: this.countDown(this.state.timer - 1)
      });
    }, 1000);
  };

  countDown = time => {
    var minutes = Math.floor(time / 60);
    var seconds = time - minutes * 60;
    return this.pad(minutes, 2) + ":" + this.pad(seconds, 2);
  };

  closeBanner = (showSuccess = false) => {
    //clearInterval(this.timer);
    this.setState({
      showBanner: false,
      showSuccessBanner: showSuccess
    });
  };
  deletePost = id => {
    this.setState({
      deletePostId: id,
      confirmDelete: true
    });
  };

  confirmDeletePost = () => {
    this.deleteSkillPosts(this.state.deletePostId);
  };
  editPost = data => {
    console.log("Edit Post " + data.id);

    var publistDate = moment(data.local_time).format("MMM D, YYYY h:mm a");
    if( data.audio ) {
      this.setState({
        briefDateTime: publistDate,
        postTitle: data.title,
        url: "https://briefify.coldsmoke.co/alexa_staging/uploads/" +data.audio,
        record_id: data.id,
        postForm: true,
        selectedTab : 1
      });
    } else {
      this.setState({
        briefDateTime: publistDate,
        postTitle: data.title,
        postText: data.text,
        record_id: data.id,
        postForm: true,
        selectedTab : 0
      });
    }
  };

  componentDidMount = () => {
    //this.startCountdown();
    console.log(""+moment(this.convertLocalDateToUTCDate(new Date('Apr, 30 2019 1:35 pm'))).format("MMM, D Y HH:mm:ss"))
    //console.log(moment(this.convertLocalDateToUTCDate(new Date())).format("MMM, D Y HH:mm:ss") ) ;
    this.getAppData();
  };

  getAppData = () => {
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
        if (responseJson.id == "") {
          window.location.href = "intro";
        } else {
          this.setState(
            {
              //featured_discount: responseJson.featured_discount,
              //product_collection: responseJson.product_collection,
              //general_announcement: responseJson.general_announcement,
              //last_update: responseJson.last_update,
              //selectedTab: responseJson.is_textbriefing == "1" ? 0 : 1,
              //is_textbriefing: responseJson.is_textbriefing,
              //audio: responseJson.audio,
              progress: responseJson.precentage,
              paidStore: responseJson.paid_store,
              shopID: responseJson.id,
              //text: responseJson.textProgress
            },
            () => this.getSkillPosts(responseJson.id)
          );
          if (this.state.progress <= 40) {
            $(".Polaris-ProgressBar__Indicator").addClass("red");
          } else if (this.state.progress <= 70) {
            $(".Polaris-ProgressBar__Indicator").addClass("orange");
          } else if ( this.state.progress == 100 ) {
            $(".Polaris-ProgressBar").closest('.Polaris-Card').hide();
            $(".Polaris-ProgressBar__Indicator").addClass("green");
          } else {
            $(".Polaris-ProgressBar__Indicator").addClass("green");
          }
        }
      })
      .catch(error => {
        this.setState({ message: error });
      });
    this.setState({
      count: 1
    });


  };

  deleteSkillPosts = _id => {
    fetch("files/deleteItem.php?record_id=" + _id, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      }
    })
      //.then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        //if (responseJson.deleted) {
        this.setState({
          confirmDelete: false
        });
        this.getSkillPosts(this.state.shopID);
        //}
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  getSkillPosts = _id => {
    fetch("files/getItems.php?shop_id=" + _id, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        var rowsData = [];
        responseJson.forEach(element => {
          rowsData.push([
            element.title,
            element.audio == "" ? (
              element.text
            ) : (
              <ReactAudioPlayer
                src={
                  "https://briefify.coldsmoke.co/alexa_staging/uploads/" + element.audio
                }
                controls
                style={{
                  minWidth: "500px"
                }}
              />
            ),
            element.local_time,
            <div>
              <Button onClick={() => this.editPost(element)}>Edit</Button>{" "}
              <Button onClick={() => this.deletePost(element.id)}>
                Delete
              </Button>
            </div>
          ]);
        });
        this.setState({ rows: rowsData });
      })
      .catch(error => {
        this.setState({ message: error });
      });
    this.setState({
      count: 1
    });
  };

  render() {
    const {
      featured_discount,
      product_collection,
      general_announcement,
      count,
      active,
      audioError,
      showBanner,
      showSuccessBanner,
      progress,
      text,
      audio,
      files,
      hasError,
      rejectedFiles,
      selectedTab,
      is_textbriefing,
      url,
      month,
      year,
      selected,
      feedTime,
      briefDateTime,
      popOverActive,
      postTitle,
      postText,
      postForm,
      confirmDelete,
      isEnable,
      dateSet,
      dateHour,
      minute
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
    const activator = (
      <TextField
        value={briefDateTime}
        label="Publish Date and Time"
        readOnly={true}
        prefix={<Icon source="calendar" color="black" />}
        onFocus={() => this.togglePopover(true)}
      />
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
    const tabPanels = [
      <Tabs.Panel id="panel1">
        <Card sectioned>
          <Form action="" method="post"  enctype="multipart/form-data" onSubmit={this.handlePostFormSubmit}>
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

              <TextField
                value={postText}
                label="Text"
                multiline={true}
                onChange={this.handleChange("postText")}
              />
              <ButtonGroup>
                <Button id="BtnTextStyle" disabled = {this.state.isEnable}  submit loading={false}>
                  {" "}
                  Save{" "}
                </Button>
                <Button
                  submit
                  onClick={() => this.setState({ postForm: false })}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </FormLayout>
          </Form>
        </Card>
      </Tabs.Panel>,
      <Tabs.Panel id="panel2">
        <Card sectioned>
          <Form action="" method="post"  enctype="multipart/form-data" onSubmit={this.handlePostFormSubmit}>
            <FormLayout>
              <TextField
                value={postTitle}
                label="Title"
                onChange={this.handleChange("postTitle")}
              />
              <Popover
                active={popOverActive}
                activator={activator}
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
                {!!audio && is_textbriefing == "0" && (
                  <TextContainer>
                    <p>Published Audio</p>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center"
                      }}
                    >
                      <ReactAudioPlayer
                        src={
                          "https://briefify.coldsmoke.co/alexa_staging/uploads/" + audio
                        }
                        controls
                        style={{
                          minWidth: "500px"
                        }}
                      />
                    </div>
                  </TextContainer>
                )}
                <TextContainer>
                  <p>New Audio</p>
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
                </TextContainer>
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
              <ButtonGroup>
                <Button id="BtnAudioStyle" submit>
                  {" "}
                  Save{" "}
                </Button>
                <Button
                  submit
                  onClick={() => this.setState({ postForm: false })}
                >
                  Cancel
                </Button>
              </ButtonGroup>
            </FormLayout>
          </Form>
        </Card>
      </Tabs.Panel>
    ];

    if (this.state.count === 0) {
    }

    return (
      <AppProvider>
        {!!this.state.progress && this.state.progress > 0 ? (
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

            <Modal
              open={confirmDelete}
              size="Medium"
              onClose={this.handleDeleteModalChange}
              title="Delete Confirmation"
              primaryAction={{
                content: "Confirm",
                onAction: this.confirmDeletePost
              }}
              secondaryActions={[
                {
                  content: "Cancel",
                  onAction: this.handleDeleteModalChange
                }
              ]}
            >
              <Modal.Section>
                <TextContainer>
                  <p>Are you sure want to delete. </p>
                </TextContainer>
              </Modal.Section>
            </Modal>

            <Card title="App Submission Progress" sectioned>
              <Subheading>
                {this.state.text} - {this.state.progress}% Completed
              </Subheading>
              <ProgressBar progress={this.state.progress} size="large" />
            </Card>
            {showBanner && (
              <Banner title="Briefing Publishing" status={"warning"}>
                <p>
                  Flash briefing will be available on alexa in{" "}
                  {this.state.countDownTime} mins
                </p>
              </Banner>
            )}
            {showSuccessBanner && (
              <Banner
                title="Briefing Published"
                onDismiss={() => {
                  this.setState({
                    ...this.state,
                    showSuccessBanner: false
                  });
                }}
                status={"success"}
              />
            )}
            {!this.state.paidStore && (
              <CalloutCard
                title="Update to Pro"
                illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
                primaryAction={{
                  content: "Upgrade to Pro",
                  onAction: this.goForMonthlyPayment
                }}
              >
                <p>Upload or Record audio for alexa</p>
              </CalloutCard>
            )}
            {postForm && (
              <Card title="Briefing Types " sectioned="true">
                <ButtonGroup segmented>
                  <Button
                    primary={selectedTab == 0 ? true : false}
                    onClick={() => this.setContent("text")}
                  >
                    <p>
                      Text {is_textbriefing == "1" && <this.PublishedIcon />}{" "}
                      {!this.state.formErrorMessage}
                    </p>
                  </Button>
                  {this.state.paidStore && (
                    <Button
                      primary={selectedTab == 1 ? true : false}
                      onClick={() => this.setContent("audio")}
                    >
                      <p>
                        Audio {is_textbriefing == "0" && <this.PublishedIcon />}
                      </p>
                    </Button>
                  )}
                </ButtonGroup>
                {/* {this.state.last_update !== "0000-00-00 00:00:00" && (
                  <p>
                    <br />
                    Last updated on{" "}
                    {this.convertUTCDateToLocalDate(
                      new Date(this.state.last_update)
                    ).toLocaleString()}
                  </p>
                )} */}
              </Card>
            )}
            {postForm && tabPanels[selectedTab]}

            {<p>{"\u00A0"}</p>}
            {
              <p>
                <Button onClick={() => this.setState({ postForm: true })}>
                  Add Post
                </Button>
              </p>
            }
            {<p>{"\u00A0"}</p>}
            {!!this.state.rows && (
              <Card title="All Post" sectioned="true">
                <DataTable
                  columnContentTypes={["text", "text", "text", "text"]}
                  headings={["Title", "Content", "Publish Date", ""]}
                  rows={this.state.rows}
                />
              </Card>
            )}

            {audioError && (
              <Modal
                open={audioError}
                size="Medium"
                onClose={this.handleErrorModalChange}
                title="Alexa Submission "
                primaryAction={{
                  content: "OK",
                  onAction: this.handleErrorModalChange
                }}
              >
                <Modal.Section>
                  <TextContainer>
                    <Icon source="save" color="red" />
                    <p className="errortext">Please upload or record audio</p>
                  </TextContainer>
                </Modal.Section>
              </Modal>
            )}
          </Page>
        ) : (
          <div style={{ textAlign: "center", marginTop: "100px" }}>
            <Page>
              <Spinner size="large" color="teal" />
            </Page>
          </div>
        )}
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
    console.log("error recording", err.message);

    var isChrome = !!window.chrome;

    if (isChrome) {
      console.log("Open external");
      if( this.state.record_id ) {
        window.open("/alexa_staging/external/records?record_id="+this.state.record_id, "_blank");
      } else {
        window.open("/alexa_staging/external/records", "_blank");
      }
    }
    console.log(err.code, typeof err, err.name);

    if (this.state.url) {
      window.URL.revokeObjectURL(this.state.url);
    }

    this.setState({ url: null });

    console.log(err + " == DOMException");
  };
}

export default App;
