import Image from "next/image";
const page = () => {
  return (
    <>
      <div id="flexxx">
        {/* Live Stream Section Start Here */}
        <div id="contactflex">
          <h1 id="Stream">Live Streaming Today!</h1>
          <p id="Time">08:00 pm</p>
          <br></br>
          <button id="Join">Join Quickly</button>
        </div>
        {/* Live Stream Section Start Here */}
        {/* Login Form Start Here */}
        <div id="form">
          <h2 id="login">Login Here</h2>
          <input
            id="input"
            type="email"
            name="email"
            placeholder="Enter Email Here"
          ></input>
          <br></br>
          <br></br>
          <input
            id="input"
            type="password"
            name=""
            placeholder="Enter Password Here"
          ></input>
          <br></br>
          <br></br>
          <br></br>
          <button>Login</button>
        </div>
        {/* Login Form Start Here */}
      </div>
    </>
  );
};
export default page;
