import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { ThreeDots } from "react-loader-spinner";

const ForumQuestion = (props) => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [errors, setErrors] = useState(false);
  const cancelButtonRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const emailRegex =
    /^(([^<>()/.,;:\s@"]+(\.[^<>()/.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const formValidation = () => {
    let isValid = true;
    let error = {};
    if (firstname === "") {
      isValid = false;
      error.firstname = "Name is required";
    }
    if (question === "") {
      isValid = false;
      error.question = "Question is required";
    }
    if (email === "") {
      isValid = false;
      error.email = "Email Address is required";
    } else if (!emailRegex.test(email)) {
      isValid = false;
      error.email = "Please fill correct email address";
    }

    setErrors(error);
    return isValid;
  };

  const clearerror = () => {
    props.closeModal();
    setErrors("");
  };

  // console.log(firstname, email, question);
  const askQuestion = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Name: firstname,
      Email: email,
      Question: question,
      KeyWord: firstname,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/admin1_1/AddQuestions`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          props.onSuccessForm();
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Be a part of career discussions
                    </Dialog.Title>
                  </div>
                  <div className="mt-2">
                    <div className="">
                      <form action="#" className="mt-4">
                        <div className="mb-3">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              required
                              name="name"
                              id="name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  text-sm"
                              placeholder="Your name"
                              onChange={(e) => {
                                setFirstname(e.target.value);
                                setErrors("");
                              }}
                            />
                          </div>
                          <div className=" flex text=start text-sm  tracking-wide text-red-600  m-1">
                            {errors.firstname}
                          </div>
                        </div>
                        <div className="mb-3">
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <input
                              type="email"
                              required
                              name="email"
                              id="email"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                              placeholder="you@example.com"
                              onChange={(e) => {
                                setEmail(e.target.value);
                                setErrors("");
                              }}
                            />
                          </div>
                          <div className=" flex text=start text-sm   tracking-wide text-red-600  m-1">
                            {errors.email}
                          </div>
                        </div>
                        <div>
                          <label htmlFor="comment" className="sr-only">
                            Question
                          </label>
                          <textarea
                            id="comment"
                            name="comment"
                            required
                            type="text"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  text-sm"
                            placeholder="Ask a question"
                            defaultValue={""}
                            onChange={(e) => {
                              setQuestion(e.target.value);
                              setErrors("");
                            }}
                          />
                        </div>

                        <div className=" flex text=start text-sm  tracking-wide text-red-600  m-1">
                          {errors.question}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                    onClick={() => {
                      formValidation() ? askQuestion() : "";
                    }}
                  >
                    {loading ? (
                      <ThreeDots
                        height="20"
                        width="30"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                      />
                    ) : (
                      "Confirm"
                    )}
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                    onClick={clearerror}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ForumQuestion;
