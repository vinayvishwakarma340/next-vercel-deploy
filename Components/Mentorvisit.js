import React, { useState } from "react";
import InputModal from "./Modal/InputModal";

const Mentorvisit = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [name, setname] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [lname, setLname] = useState("");
    const [errors, setErrors] = useState("");

    const close = () => {
        setShowModal(false)
    }


    return (
        <div className="flex m-auto" >

            <InputModal
                openModal={showModal}
                closeModal={close}
                submitbuttonText={"Submit"}
                closebuttonText={"Cancel"}
            // validation={validation}

            />

            <div className=" bg-purple-700 mx-auto max-w-5xl py-16 px-4 text-center sm:py-14 sm:px-6 lg:px-8">
                <h2 className=" text-xl   font-bold tracking-tight text-white  ">
                    <span className="block">{props.heading}</span>

                </h2>
                <p className="mt-4 text-base leading-6 text-indigo-200">
                    {props.subhead}
                </p>
                <div className="flex gap-x-4 justify-center">
                    <a
                        onClick={props.modalopen}
                        className="mt-8 cursor-pointer inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-purple-50 sm:w-auto"
                    >
                        {props.btnonetext}
                    </a>
                    <a
                        onClick={props.modalopen}
                        className="mt-8 cursor-pointer inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-purple-50 sm:w-auto"
                    >
                        {props.btntwotext}
                    </a>{" "}
                </div>
            </div>

        </div>
    );
};

export default Mentorvisit;
