import { useEffect } from "react"

const index = () => {
  useEffect(()=>{
    callMe()
  },[])

  const callMe = async() =>{
    const res = await fetch("/api/hello");
    const data = await res.json()
console.log(data,"ererererer-----")
  }
  return (
    <div>my name is vinay</div>
  )
}

export default index