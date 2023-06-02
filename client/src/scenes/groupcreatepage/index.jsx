import "./GroupCreate.css";
import React, { useState, useCallback } from "react";
import Header from "../../Components/Header";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Checkbox } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate, useSearchParams } from "react-router-dom";
// import MainValidation from "./MainValidation";
import MainValidation from '../../Components/MainValidation';
import { getStyleValue } from "@mui/system";
import { BiRupee } from "react-icons/bi";
import axios from 'axios';


export default function VerticalLinearStepper() {
  const [giftExchangeDate, setGiftExchangeDate] = useState();
  const [show, setShow] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [organiserName, setOrganiserName] = useState();
  const [names, setNames] = useState(["", "", "", ""]);
  const [errorArray, setErrorArray] = useState();
  const [value, setValue] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [organiserEmail, setOrganiserEmail] = useState();
  const [groupName, setGroupName] = useState();
  const [budget, setBudget] = useState();
  const [searchParam] = useSearchParams();
  const createdBy = searchParam.get("userId");

  const amounts = [
    { value: " " , text: "Budget"},
    { value: "250" , text: "250"},
    { value: "500" , text: "500"},
    { value: "750" , text: "750"},
    { value: "1000" , text: "1000"},
    { value: "1250" , text: "1250"},
    { value: "1500" , text: "1500"},
    { value: "1750" , text: "1750"},
    { value: "2000" , text: "2000"},
    { value: "2500" , text: "2500"},
    { value: "3000" , text: "3000"},
    { value: "4000" , text: "4000"},
    { value: "5000" , text: "5000"},
    { value: "6000" , text: "6000"},
    { value: "7500" , text: "7500"},
    { value: "10000" , text: "10000"},
    { value: "12500" , text: "12500"},
    { value: "25000" , text: "25000"},
    { value: "37500" , text: "37500"},
    { value: "50000" , text: "50000"},

  ]

  // const handleDeleteIcon = (event) => {
  //   setIsShown(true);
  // };
  const handleChange = (event, i) => {
    const inputdata = [...names];
    inputdata[i] = event.target.value;
    // inputdata[1].value = inputdata[0].event.target.value;
    setNames(inputdata);
    setIsShown(true);
    // style={{display: { this.state.showStore ? 'block' : 'none'} }}
  };

  const handleAdd = () => {
    const abc = [...names, ""];
    setNames(abc);
  };

  const handleDelete = (i) => {
    const inputArray = [...names];
    if (i > 3) {
      inputArray.splice(i, 1);
      setNames(inputArray);
    }
  };

  const formValidation = (names) => {
    const data = [...names];
    // var re = /\S+@\S+\.\S+/;
    let valid = true;
    for (let index = 0; index < data.length; index++) {
      // const element = data[index];
      if (data[index].name === "") {
        data[index].nameCheck = "name required";
        data[index].nameLengthCheck = "";
        valid = false;
      }
    }
    setNames(data);
    return valid;
  };
  const handleNext = (e) => {
    e.preventDefault();
    formValidation(names);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const clearDate = () => {
    alert("date clear button clicked");
    setGiftExchangeDate("");
  };

  const clearTextArea = () => {
    console.log("clear button working");
    setValue("");
  };

  const navigate = useNavigate();
  const handleConfirm = (e) => {
    e.preventDefault();
    console.log("organiser name: ", organiserName);
    console.log("group name: ", groupName);
    console.log("user Id", createdBy);
        axios
      .post("http://localhost:2318/group/addgroup", {
        organiserName: organiserName,
        friendsName: names,
        groupName: groupName,
        budget: budget,
        giftExchangeDate: giftExchangeDate,
        organiserEmail: organiserEmail,
        createdBy: createdBy
      })
      .then((response) => {
        console.log("Post group response: ", response);
        console.log("New Group data: ", response.data);
        localStorage.setItem("groupId ", response.data.groupId);
        names.push(organiserName)
        console.log("players array: ", names);
        names.forEach((friendName) => {
          axios
            .post("http://localhost:2318/players/add", {
              invitationAccepted: 'false',
              playerName: friendName,
              playerEmail: "",
              groupName: response.data.groupName,
              groupId: response.data.groupId,
            })
            .then((response) => {
              console.log("Post friend response:", response);
              console.log("New Friend data:", response.data);
              axios
                .get(`http://localhost:2318/players/groupname/${response.data.groupName}`)
                .then((friendDataResponse) => {
                  const friendData = friendDataResponse.data;
                  axios
                    .put(`http://localhost:2318/players/array/${response.data.groupId}`, {
                      friendsIdArray: friendData
                    })
                    .then((putResponse) => {
                      console.log("Put response:", putResponse);
                    })
                    .catch((error) => { 
                      console.error("Error updating friends array:", error);
                    });
                })
                .catch((error) => {
                  console.error("Error fetching friend data:", error);
                });
            })
            .catch((error) => {
              console.error("Error posting friend:", error);
            });
        });
        navigate(`/copyin?email=${response.data.groupId}`);
      })
      .catch((error) => {
        console.error("Error posting group:", error);
      });

    
  };

  const steps = [
    {
      label: <h1 className="text-center">Enter names</h1>,
      description: (
        <div className="organiser">
          <h2 className="text-centerN">Your name</h2>
          <input 
            placeholder="Oraganiser Name"
            value={organiserName}
            onChange={(e) => setOrganiserName(e.target.value)}
          />
          <div>
            {names.map((data, i) => {
              return (
                <div key={i}>
                  {i === 0 && <h2 className="text-centerN">Draw names with</h2>}
                  {
                    <div className="input-group" >
                      <input
                        // onClick={handleDeleteIcon}
                        value={data}
                        onChange={(e) => handleChange(e, i)}
                        placeholder={`Enter member${i + 1}`}
                      />
                      {isShown && (
                        <div>
                          <boxnote onClick={() => handleDelete(i)}>x</boxnote>
                        </div>
                      )}
                      {/* {show ? null : (
                        <boxnote onClick={() => handleDelete(i)}>x</boxnote>
                      )} */}
                    </div>
                  }
                </div>
              );
            })}
            <div style={{ color: "red" }}>
              {names.nameCheck}
              <br />
              {names.nameLengthCheck}
            </div>

            <p className="SideBarN" onClick={() => handleAdd()}>
              <span className="blue">Add more names</span>
            </p>
          </div>

          <p className="Para">Later you can:</p>
          <p className="Para">- invite more people to join</p>
          <p className="Para">- remove someone who isn't taking part</p>

          <button className="mainitems-btn" onClick={handleNext}>
            Next
          </button>
        </div>
      ),
    },
    {
      label: <h1 className="text-center">Set up gift exchange details</h1>,
      description: (
        <div>
          <h2 className="text-centerN">Group name</h2>

          <div className="input-group">
            <input
              type="text"
              name="groupname"
              id="username"
              placeholder="Enter a title for the gift exchange"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>

          <h2 className="text-centerN">
            <b>Date of the gift exchange</b> - optional
          </h2>

          <div className="input-group">
            <input
              type="date"
              value={giftExchangeDate}
              onChange={(e) => setGiftExchangeDate(e.target.value)}
              placeholder="Choose a date"
              onClick={() => setShow((show) => !show)}
            />
            {/* <boxnote onClick={() => setShow((show) => !show)}> */}
            {show ? null : <boxnote onClick={clearDate}>X</boxnote>}
            {/* </boxnote> */}
          </div>

          <h2 className="text-centerN">
            <b>Postal address</b> -optional
          </h2>
          <div>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Send each other gifts by post"
                onClick={() => setShow((show) => !show)}
              ></FormControlLabel>
            </FormGroup>
            {show ? null : (
              <p className="Para">
                Members can fill in their postal addresses.
              </p>
            )}

            <h2 className="text-centerN">
              {" "}
              <b>Budget</b> - optional
            </h2>

            <div className="input-group">
              <select value={budget} onChange={(e) => setBudget(e.target.value)}>
                {amounts.map((options) => (
                  <option key={options.value} value={options.value}>
                    <BiRupee/>{options.text}
                  </option>
                ))}
              </select>
              {/* <box onClick={() => setShow((show) => !show)}>
                {show ? null : (
                  <box>X</box>
                )}
              </box> */}
            </div>
            <h2 className="text-centerN">Your Email</h2>
            <div className="input-group" >
              <input 
                placeholder="Enter your email address"
                type='email'
                name="email"
                value={organiserEmail} 
                onChange={(e) => setOrganiserEmail(e.target.value)}
              />
            </div>
            <h2 className="text-centerN">Invitation message</h2>
            <div className="Para">
              <textarea
                type="text"
                // value={value}
                // onChange={(newValue) => {
                //   setValue(newValue.target.value);
                // }}
              >
                We're going to draw names! Make a wish list and draw a name so that everyone has time to buy a gift.
              </textarea>
              <boxnote onClick={clearTextArea} className="textarea-boxnote">
                X
              </boxnote>
            </div>
            <p className="ParaT">
              <b>Draw names</b>
            </p>
            <p className="Para">
              Confirm the group and choose how to send the invitations.
            </p>
            <button className="mainitems-btn" 
            onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="form">
      {/* <input
        type="number"
        id="weight"
        // onChange={handleChange}
        value={Items.weight}
        placeholder="Enter weight…"
      /> */}
      <Header />
      <Box className="box" x={{ maxWidth: 600 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel
                optional={
                  index === 2 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
              <StepContent>{step.description}</StepContent>
            </Step>
          ))}
        </Stepper>
        {/* {
          activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )
        } */}
      </Box>
    </div>
  );
}
