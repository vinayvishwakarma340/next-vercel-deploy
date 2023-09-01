import Image from "next/image";
import React, { useState } from "react";
import { useEffect } from "react";
import InputModal from "./Modal/InputModal";

const serviceimages = (props) => {
  const services = [
    {
      img: "/Times/card_img.png",
      heading: "Mentorship for Achieving your Personal & Professional Goals",
      para: "Schedule a session instantly with a mentor for 60 Mins or even have them work with you for 3 to 6 months, this helps you achieve your goals faster than you ever thought.",
      link: "Join Mentorkart ",
    },
    {
      img: "/Times/mentorkart.png",
      heading: "Goal based mentorship packages for target centric preparation.",
      para: "You can enroll to these packages for targeted Goals, on platform these have been listed and they include set of 1:1 call, Live Sessions by Mentors and High-quality Recorded Video programs.",
      link: "Explore Packages ",
    },
    {
      img: "/Times/mentor.png",
      heading:
        "Active learning subscription for diversified knowledge of Job profiles ",
      para: "Learning should never stop, here at Active Learning Subscription you will get flavor of various job roles like Data Science Professional, Full Stack Developer, Digital Marketing and many more. All the sessions will happen live along with question and answer session. So what are you waiting for?",
      link: "Subscribe Now",
    },
    {
      img: "/Times/kart.png",
      heading: "Programs & Courses to uplift your preparation with our experts",
      para: "Enroll in these programs and courses for Job and Growth oriented Goals by expert Mentors, never stop learning killing and reskilling for high growth in your professional career.",
      link: "Explore Skills  ",
    },
    {
      img: "/Times/maenkaart.png",
      heading: "Career Acceleration Program with assured Job Guarantee",
      para: "Do you want to accelerate your career growth or want to do the career transition or want to start fresh Join this Career Acceleration Program with Job Guarantee Support.",
      link: "Enroll Now",
    },
    {
      img: "/Times/ment.png",
      heading:
        "Student Mentorship Program to excel in Job Interviews & Discussions",
      para: "Feeling stuck while giving interviews? Finding hard to present yourself to interview, Don’t worry MentorKart got you covered. Register for Student Mentorship Program and crack interviews like a pro. ",
      link: "Student Mentorship Program   ",
    },
  ];


  const close = () => {
    props.setShowModal(false);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl   px-4 sm:px-6 lg:px-8 lg:pt-8 ">
        <div className="space-y-12 lg:grid   lg:gap-8 lg:space-y-0">
          <InputModal
            openModal={props.showModal}
            closeModal={close}
            submitbuttonText={"Submit"}
            closebuttonText={"Cancel"}
            updateCandidateDetails={props.updateCandidateDetails}
            firstname={props.firstname}
            setFirstname={props.setFirstname}
            lastname={props.lastname}
            setLastname={props.setLastname}
            setEmail={props.setEmail}
            setMob={props.setMob}
            mob={props.mob}
            email={props.email}
            loading={props.loading}
          />
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-6   sm:grid sm:grid-cols-3 sm:gap-x-3 sm:gap-y-6 sm:space-y-0 lg:gap-x-4"
            >
              {services.map((person, index) => (
                <li key={index}>
                  <div className="space-y-3">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image
                        className="rounded-lg object-cover shadow-lg"
                        src={person.img}
                        alt="sd"
                        width={"768"}
                        height={"717"}
                        loading="lazy"
                      />
                    </div>
                    <div className=" line-clamp-2  max-w-5xl text-sm   font-semibold leading-6">
                      <h2>{person.heading}</h2>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className=" max-w-5xl  text-sm     line-clamp-3 ">
                      <p className=" ">
                        {person.para.substring(0, 135)}...
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <button
                      onClick={props.modalopen}
                      type="button"
                      className=" mt-4 w-full  rounded-md border border-transparent bg-purple-100 px-4 py-2 text-base font-medium text-indigo-700 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {person.link}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviceimages;
