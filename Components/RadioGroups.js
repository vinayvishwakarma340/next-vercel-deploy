import { useEffect, useState } from "react";
import { RadioGroup } from "@headlessui/react";
import PurpleButton from "./ButtonUI/PurpleButton";

const settings = [
  {
    name: "YES",
    description: "This project would be available to anyone who has the link",
  },
  {
    name: "NO",
    description: "Only members of this project would be able to access",
  },
  {
    name: "May Be",
    description: "You are the only one able to access this project",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RadioGroups = () => {
  const [selected, setSelected] = useState(settings[0]);

  // useEffect(() => {
  //   GetOpinionPollHandler();
  // }, []);

  // const GetOpinionPollHandler = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     process.env.API_TOKEN_AUTH_SERVER
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     email: "tester@yopmail.com",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch("https://api.timesascent.com/adminapi/GetOpinionPoll", requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.status_code === 200) {
  //         setData(result.data);
  //       }
  //     });
  // };
  return (
    <div className="bg-white rounded-md">
      <h3 className=" text-md  font-semibold">
        Are you planning to switch your job in 2022?
      </h3>
      <RadioGroup className={"mt-2"} value={selected} onChange={setSelected}>
        <RadioGroup.Label className="sr-only">Privacy setting</RadioGroup.Label>
        <div className="-space-y-px  bg-white">
          {settings.map((setting, settingIdx) => (
            <RadioGroup.Option
              key={setting.name}
              value={setting}
              className={({ checked }) =>
                classNames(
                  settingIdx === 0 ? "rounded-tl-md rounded-tr-md" : "",
                  settingIdx === settings.length - 1 ? "" : "",
                  checked
                    ? "bg-purple-50 border-indigo-200 z-10"
                    : "border-gray-200",
                  "relative border px-2 py-3 flex cursor-pointer focus:outline-none"
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span
                    className={classNames(
                      checked
                        ? "bg-purple-600 border-transparent"
                        : "bg-white border-gray-300",
                      active ? "ring-2 ring-offset-2 ring-timesPurple" : "",
                      "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                    )}
                    aria-hidden="true"
                  >
                    <span className="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <span className="ml-3 flex flex-col">
                    <RadioGroup.Label
                      as="span"
                      className={classNames(
                        checked ? "text-timesPurple" : "text-gray-900",
                        "block text-sm font-medium"
                      )}
                    >
                      {setting.name}
                    </RadioGroup.Label>
                  </span>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>

        <div>
          <PurpleButton buttonText={"Submit"} />
        </div>
      </RadioGroup>
    </div>
  );
};

export default RadioGroups;
