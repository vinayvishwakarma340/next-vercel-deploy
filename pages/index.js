import { useEffect } from "react";

const index = () => {
  useEffect(() => {
    callMe();
  }, []);

  const callMe = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    console.log(data, "ererererer-----");
  };
  return <h1 className="text-3xl font-bold text-red-500">Hello world!</h1>;
};

export default index;
