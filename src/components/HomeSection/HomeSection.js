import React, { useEffect } from 'react'
import HomeBg from '../../images/homebg.png'




function HomeSection() {

  const [userData, setUserData] = React.useState();

  const callAboutPage = async () => {
    try {

      const response = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Contorl-Access-Origin": "*"
        },
        credentials: "include"
      })

      const data = await response.json();
      setUserData(data);

      if (!response.status === 200) {
        const err = new Error(response.error);
        throw err;
      }


    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    callAboutPage();
  }, [])



  return (
    <div className='mt-4'>
      <div
        className="home flex flex-col items-center justify-center h-screen bg-center bg-no-repeat lg:-mt-5 xl:-mt-4 2xl:-mt-2"
        style={{ backgroundImage: `url(${HomeBg})` }}
      >
        {userData ? (
          <div>
            <h1 className="self-center text-5xl font-bold text-center">
              Hello, {userData.name}!
            </h1>
            <h1 className="mt-2 self-center text-lg font-bold text-center">
              Welcome into the world of Full-Stack Web Development
            </h1>
          </div>
        ) : (
          <div>
            <h1 className="self-center text-5xl font-bold text-center">
              We Are MERN Developers
            </h1>
            <h1 className="mt-2 self-center text-lg font-bold text-center">
              Welcome into the world of Full-Stack Web Development
            </h1>
          </div>
        )}
      </div>

    </div>
  )
}

export default HomeSection