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
import { useNavigate } from "react-router-dom";
// import MainValidation from "./MainValidation";
import MainValidation from '../../Components/MainValidation';
import { getStyleValue } from "@mui/system";
import { BiRupee } from "react-icons/bi";
import axios from 'axios';


export default function VerticalLinearStepper() {
  const [date, setDate] = useState();
  const [show, setShow] = useState(true);
  const [activeStep, setActiveStep] = useState(0);
  const [organiserName, setOrganiserName] = useState();
  const [names, setNames] = useState(["", "", "", ""]);
  const [errorArray, setErrorArray] = useState();
  const [value, setValue] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [email, setEmail] = useState();

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
    setDate("");
  };

  const clearTextArea = () => {
    console.log("clear button working");
    setValue("");
  };

  const navigate = useNavigate();
  const handleConfirm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2318/group/add", {
        
      })
    // navigate("/Message");
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
                <div>
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
              name="username"
              id="username"
              placeholder="Enter a title for the gift exchange"
            />
          </div>

          <h2 className="text-centerN">
            <b>Date of the gift exchange</b> - optional
          </h2>

          <div className="input-group">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
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
              <select placeholder="select budget">
                <option>Select Budget</option>
                <option><BiRupee/>250</option>
                <option><BiRupee/>500</option>
                <option><BiRupee/>750</option>
                <option><BiRupee/>1000</option>
                <option><BiRupee/>1250</option>
                <option><BiRupee/>1500</option>
                <option><BiRupee/>1750</option>
                <option><BiRupee/>2000</option>
                <option><BiRupee/>2500</option>
                <option><BiRupee/>3,000</option>
                <option><BiRupee/>4,000</option>
                <option><BiRupee/>5,000</option>
                <option><BiRupee/>7,500</option>
                <option><BiRupee/>10,000</option>
                <option><BiRupee/>12,500</option>
                <option><BiRupee/>25,000</option>
                <option><BiRupee/>37,500</option>
                <option><BiRupee/>50,000</option>
              </select>
              {/* <box onClick={() => setShow((show) => !show)}>
                {show ? null : (
                  <box>X</box>
                )}
              </box> */}
            </div>
            <h2 className="text-centerN">Your Email</h2>
            <div className="input-group" >
              <input placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)}/>
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
            <Step key={step.label}>
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
