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
  Tabs,
  InlineError,
  Select,
  RadioButton,
  TextStyle
} from "@shopify/polaris";
import $ from "jquery";

class Information extends Component {
  state = {
    public_name: "",
    one_sent_desc: "",
    detail_desc: "",
    whats_new: "",
    small_icon: [],
    large_icon: [],
    category: "",
    keywords: "",
    privacy: "",
    terms: "",
    skill_purchase_money: "Yes",
    personal_info: "info_yes",
    target_children: "target_yes",
    advertising: "advert_yes",
    testing_instructions: "",
    access_skill: "public",
    categories: "",
    selected: "",
    rejectedSmallIcon: [],
    rejectedLargeIcon: [],
    hasError: false,
    popoverActive: true,
    message: ""
  };

  constructor(props) {
    super(props);
  }

  handleChange = field => {
    return value => this.setState({ [field]: value });
  };

  handleRadioChange = (checked, newValue) => {
    if (newValue === "info_no" || newValue === "info_yes") {
      this.setState({ personal_info: newValue });
    } else if (newValue === "target_no" || newValue === "target_yes") {
      this.setState({ target_children: newValue });
    } else if (newValue === "advert_no" || newValue === "advert_yes") {
      this.setState({ advertising: newValue });
    } else if (newValue === "public" || newValue === "business") {
      this.setState({ access_skill: newValue });
    } else {
      this.setState({ skill_purchase_money: newValue });
    }
  };
  handleCatChange = newValue => {
    return this.setState({ selected: newValue });
  };

  togglePopover = () => {
    this.setState(({ popoverActive }) => {
      return { popoverActive: !popoverActive };
    });
  };

  validateForm = () => {
    console.log(this.state);
    this.setState(
      {
        ...this.state,
        errors: {
					...this.state.error,
					hasError: !!!this.state.small_icon[0] || !!!this.state.large_icon[0] || !!!this.state.selected || !!!this.state.public_name,
					small_icon: !!this.state.small_icon[0] ? undefined : true,
					large_icon: !!this.state.large_icon[0] ? undefined : true,
					category: !!this.state.selected ? undefined : true,
					public_name: !!this.state.public_name ? undefined : true
        }
      },
      () => console.log(this.state)
		);
		return !!!this.state.small_icon[0] || !!!this.state.large_icon[0] || !!!this.state.selected || !!!this.state.public_name;
  };

  handleSubmit = event => {
    if(this.validateForm())
		return;
		
    var formData = new FormData();
    formData.append("small_icon", this.state.small_icon[0]);
    formData.append("large_icon", this.state.large_icon[0]);
    formData.append("public_name", this.state.public_name);
    formData.append("one_sent_desc", this.state.one_sent_desc);
    formData.append("detail_desc", this.state.detail_desc);
    formData.append("whats_new", this.state.whats_new);
    formData.append("category", this.state.selected);
    formData.append("keywords", this.state.keywords);
    formData.append("privacy", this.state.privacy);
    formData.append("terms", this.state.terms);
    formData.append("skill_purchase_money", this.state.skill_purchase_money);
    formData.append("personal_info", this.state.personal_info);
    formData.append("target_children", this.state.target_children);
    formData.append("advertising", this.state.advertising);
    formData.append("testing_instructions", this.state.testing_instructions);
    formData.append("access_skill", this.state.access_skill);
    formData.append("shop", this.props.shopName);

    fetch("files/information.php", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ message: responseJson.message, active: true });
        window.location.href = "/alexa_staging/";
      })
      .catch(error => {
        this.setState({ message: error });
      });
  };

  componentDidMount() {
    fetch("files/categoryList.php", {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
        Pragma: "no-cache",
        Expires: 0
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ categories: responseJson });
      })
      .catch(error => {
        //var options = [{'label':'a','value':'1'},{'label':'b','value':'2'}];
        this.setState({ message: error, categories: [] });
      });
  }
  render() {
    const {
      public_name,
      one_sent_desc,
      detail_desc,
      whats_new,
      categories,
      selected,
      keywords,
      privacy,
      terms,
      skill_purchase_money,
      personal_info,
      target_children,
      advertising,
      testing_instructions,
      access_skill,
      small_icon,
      rejectedSmallIcon,
      hasError,
      large_icon,
      rejectedLargeIcon
    } = this.state;
    const activator = <Button onClick={this.togglePopover}>Options</Button>;
    const fileUpload = !small_icon.length && <DropZone.FileUpload />;
    const uploadedFiles = small_icon.length > 0 && (
      <Stack vertical>
        {small_icon.map((file, index) => (
          <Stack alignment="center" key={index}>
            <div>
              {file.name} <Caption>{file.size} bytes</Caption>
            </div>
          </Stack>
        ))}
      </Stack>
    );

    const fileUploadLarge = !large_icon.length && <DropZone.FileUpload />;
    const uploadedLargeFiles = large_icon.length > 0 && (
      <Stack vertical>
        {large_icon.map((file, index) => (
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
          {rejectedSmallIcon.map((file, index) => (
            <List.Item key={index}>
              {`"${file.name}" is not supported. File type must be .mp3.`}
            </List.Item>
          ))}
        </List>
      </Banner>
    );

    const errorMessage2 = hasError && (
      <Banner
        title="The following images couldn’t be uploaded:"
        status="critical"
      >
        <List type="bullet">
          {rejectedLargeIcon.map((file, index) => (
            <List.Item key={index}>
              {`"${file.name}" is not supported. File type must be .mp3.`}
            </List.Item>
          ))}
        </List>
      </Banner>
    );

    return (
      <AppProvider>
        <Page>
          <Card sectioned>
            <Heading>Information Required</Heading>
            <br />
            <Form action="" method="post" onSubmit={this.handleSubmit}>
              <FormLayout>
							{!!this.state.errors && !!this.state.errors.public_name && (
                    <InlineError message="Public Name is required" />
                  )}
                <TextField
                  value={public_name}
                  placeholder="Enter a name for your skill for the English (US) store"
                  maxLength={50}
                  max={50}
                  label="Public Name"
                  onChange={this.handleChange("public_name")}
                />
                <TextField
                  value={one_sent_desc}
                  maxLength={160}
                  placeholder="Enter a short description(160 character maximum) about your skill"
                  label="One Sentence Description"
                  onChange={this.handleChange("one_sent_desc")}
                />
                <TextField
                  value={detail_desc}
                  maxLength={4000}
                  label="Detailed Description"
                  placeholder="Enter an emerging description of the skill's purpose, features and how it works"
                  onChange={this.handleChange("detail_desc")}
                  multiline={5}
                />
                <TextField
                  value={whats_new}
                  maxLength={2000}
                  label="What's new?"
                  onChange={this.handleChange("whats_new")}
                  multiline={5}
                />

                <Stack vertical>
                  {errorMessage}

                  {!!this.state.errors && !!this.state.errors.small_icon && (
                    <InlineError message="Small Skill icon is required" />
                  )}

                  <DropZone
                    accept="image/*"
                    type="image"
                    label="Small Skill icon (108 * 108)"
                    onDrop={(files, acceptedFiles, rejectedSmallIcon) => {
                      this.setState({
                        small_icon: [
                          ...this.state.small_icon,
                          ...acceptedFiles
                        ],
                        rejectedSmallIcon: rejectedSmallIcon,
                        hasError: rejectedSmallIcon.length > 0
                      });
                    }}
                  >
                    {uploadedFiles}
                    {fileUpload}
                  </DropZone>
                </Stack>
                <Stack vertical>
									{errorMessage2}
									{!!this.state.errors && !!this.state.errors.large_icon && (
                    <InlineError message="Large Skill icon is required" />
                  )}
                  <DropZone
                    accept="image/*"
                    type="image"
                    label="Large Skill icon (512 * 512)"
                    onDrop={(files, acceptedFiles, rejectedLargeIcon) => {
                      this.setState({
                        large_icon: [
                          ...this.state.large_icon,
                          ...acceptedFiles
                        ],
                        rejectedLargeIcon: rejectedLargeIcon,
                        hasError: rejectedLargeIcon.length > 0
                      });
                    }}
                  >
                    {uploadedLargeFiles}
                    {fileUploadLarge}
                  </DropZone>
                </Stack>
								
								{!!this.state.errors && !!this.state.errors.category && (
                    <InlineError message="Category is required" />
                  )}
                <Select
                  label="Category"
                  placeholder="Select"
                  options={this.state.categories}
                  onChange={this.handleCatChange}
                  value={this.state.selected}
                />
                <TextField
                  value={keywords}
                  maxLength={30}
                  label="Keywords"
                  placeholder="Enter search terms that you would use to describe your skill"
                  onChange={this.handleChange("keywords")}
                />
                <TextField
                  value={privacy}
                  label="Privacy & Policy URL"
                  placeholder="Enter a link to the privacy policy that applies to this skill"
                  onChange={this.handleChange("privacy")}
                />
                <TextField
                  value={terms}
                  label="Terms of Use URL"
                  placeholder="Enter a link to the terms of use document for this skill"
                  onChange={this.handleChange("terms")}
                />

                <TextStyle variation="strong">
                  Does this skill allow users to make purchases or spend real
                  money? *
                </TextStyle>
                <RadioButton
                  label="Yes"
                  checked={skill_purchase_money === "Yes"}
                  id="Yes"
                  name="skill_purchase_money"
                  onChange={this.handleRadioChange}
                />
                <RadioButton
                  label="No"
                  id="No"
                  name="skill_purchase_money"
                  checked={skill_purchase_money === "No"}
                  onChange={this.handleRadioChange}
                />
                <TextStyle variation="strong">
                  Does this Alexa skill collect users' personal information? *
                </TextStyle>
                <TextStyle variation="subdued">
                  For example: anything that can identify the user such as name,
                  email, password, phone number, birth date, etc.
                </TextStyle>
                <RadioButton
                  label="Yes"
                  checked={personal_info === "info_yes"}
                  id="info_yes"
                  name="personal_info"
                  onChange={this.handleRadioChange}
                />
                <RadioButton
                  label="No"
                  id="info_no"
                  name="personal_info"
                  checked={personal_info === "info_no"}
                  onChange={this.handleRadioChange}
                />
                <TextStyle variation="strong">
                  Is this skill directed to or does it target children under the
                  age of 13? *
                </TextStyle>
                <TextStyle variation="subdued">
                  Please indicate if this skill is directed to children under
                  the age of 13{" "}
                </TextStyle>
                <RadioButton
                  label="Yes"
                  checked={target_children === "target_yes"}
                  id="target_yes"
                  name="target_children"
                  onChange={this.handleRadioChange}
                />
                <RadioButton
                  label="No"
                  id="target_no"
                  name="target_children"
                  checked={target_children === "target_no"}
                  onChange={this.handleRadioChange}
                />
                <TextStyle variation="strong">
                  Does this skill contain advertising? *
                </TextStyle>
                <RadioButton
                  label="Yes"
                  checked={advertising === "advert_yes"}
                  id="advert_yes"
                  name="advertising"
                  onChange={this.handleRadioChange}
                />
                <RadioButton
                  label="No"
                  id="advert_no"
                  name="advertising"
                  checked={advertising === "advert_no"}
                  onChange={this.handleRadioChange}
                />
                <TextField
                  value={testing_instructions}
                  maxLength={2000}
                  label="Testing Instructions"
                  onChange={this.handleChange("testing_instructions")}
                  multiline={5}
                />
                <TextStyle variation="strong">
                  Who should have access to this skill? *
                </TextStyle>
                <RadioButton
                  label="Public"
                  checked={access_skill === "public"}
                  id="public"
                  name="access_skill"
                  onChange={this.handleRadioChange}
                />
                <RadioButton
                  label="Alexa for Business Organizations"
                  id="business"
                  name="access_skill"
                  checked={access_skill === "business"}
                  onChange={this.handleRadioChange}
                />
                <Button id="BtnTextStyle" submit>
                  Save & Continue
                </Button>
              </FormLayout>
            </Form>
          </Card>
        </Page>
      </AppProvider>
    );
  }
}

export default Information;
