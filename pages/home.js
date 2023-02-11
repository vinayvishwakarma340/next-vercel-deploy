
import { useAmp } from 'next/amp'
export const config = { amp: true }

function About(props) {
  const isAmp = useAmp()

  return (
    <div>
      <h3>My AMP About Page!</h3>
      {isAmp ? (
        <amp-img
          width="300"
          height="300"
          src="https://images.unsplash.com/photo-1676085272023-91fce74ee32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="a cool image"
          layout="responsive"
        />
      ) : (
        <img width="300" height="300" src="https://plus.unsplash.com/premium_photo-1661962548081-071712b709ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="a cool image" />
      )}
    </div>
  )
}

export default About