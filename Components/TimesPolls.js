import React, { useEffect } from "react";
import classes from "../styles/timespolls.module.css";
import { useState } from "react";
import { TailSpin } from "react-loader-spinner";
import PurpleButton from "./ButtonUI/PurpleButton";

const TimesPolls = (props) => {
  const Updatepolls = props.Updatepolls;
  const loading = props.loading;
  const isdata = props.isdata;
  const showQuestion = props.showQuestion;
  const yes = props.yes;
  const No = props.No;
  const maybe = props.maybe;
  const setYes = props.setYes;
  const setNo = props.setNo;
  const setMaybe = props.setMaybe;
  const setActiveborder = props.setActiveborder;
  const activeborder = props.activeborder;
  const showAnswer = props.showAnswer;
  const errors = props.errors;
  return (
    <>
      {loading ? (
        <div className={classes.Main_div}>
          <TailSpin
            color="red"
            height={80}
            width={80}
            className="text-center py-4 w-100"
          />
        </div>
      ) : (
        <>
          {isdata.length <= showQuestion ? (
            <div className={classes.Main_div}>
              <h5
                className={` ${classes.Thank_popup} border border-purple-100 rounded-lg`}
              >
                Thank you for your feedback. We really appreciate your time.
              </h5>
            </div>
          ) : (
            <div
              className={` ${classes.Main_div} border border-purple-50 rounded-lg`}
            >
              <div>
                {" "}
                <label className="text-lg font-semibold">
                  {isdata[showQuestion] ? isdata[showQuestion].question : ""}
                </label>
              </div>
              <div>
                <label
                  className={
                    activeborder === "1"
                      ? classes.input_poll_active
                      : classes.input_poll
                  }
                  htmlFor="1"
                >
                  <input
                    className="poll"
                    name="Decide"
                    id="1"
                    type="radio"
                    onChange={(e) => {
                      setYes(isdata[showAnswer].option1);
                      setNo("");
                      setMaybe("");
                    }}
                    checked={yes}
                    value={yes}
                    onClick={() => {
                      setActiveborder("1");
                    }}
                  />

                  <label className={classes.poll_text} htmlFor="1">
                    {isdata[showAnswer] ? isdata[showAnswer].option1 : ""}
                  </label>
                </label>
              </div>
              <div>
                <label
                  className={
                    activeborder === "2"
                      ? classes.input_poll_active
                      : classes.input_poll
                  }
                  htmlFor="2"
                >
                  <input
                    className="poll"
                    type="radio"
                    name="Decide"
                    checked={No}
                    id="2"
                    value={No}
                    onChange={(e) => {
                      setNo(isdata[showAnswer].option2);
                      setYes("");
                      setMaybe("");
                    }}
                    onClick={() => {
                      setActiveborder("2");
                    }}
                  />

                  <label className={classes.poll_text} htmlFor="2">
                    {isdata[showAnswer] ? isdata[showAnswer].option2 : ""}
                  </label>
                </label>
              </div>
              {isdata[showAnswer].option3 &&
                isdata[showAnswer].option3.length > 3 && (
                  <div>
                    {" "}
                    <label
                      className={
                        activeborder === "3"
                          ? classes.input_poll_active
                          : classes.input_poll
                      }
                      htmlFor="3"
                    >
                      <input
                        className="poll"
                        type="radio"
                        name="Decide"
                        id="3"
                        checked={maybe}
                        value={maybe}
                        onChange={(e) => {
                          setMaybe(isdata[showAnswer].option3);
                          setYes("");
                          setNo("");
                        }}
                        onClick={() => {
                          setActiveborder("3");
                        }}
                      />

                      <label className={classes.poll_text} htmlFor="3">
                        {isdata[showAnswer] ? isdata[showAnswer].option3 : ""}
                      </label>
                    </label>
                  </div>
                )}
              <div className={classes.error}>{errors}</div>




              <PurpleButton
                buttonText={"Submit"}
                onClick={() => {
                  Updatepolls();
                }}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default TimesPolls;
