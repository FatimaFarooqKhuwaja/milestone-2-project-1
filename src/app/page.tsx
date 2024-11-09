import Image from "next/image";
const Page = () => {
  return (
    <>
    {/* <Front Page Start Here */}
      <div id="childrenflex">
        <div id="line"></div>
        <div id="divFlex">
          <div id="maindiv">
            <h1 id="Topic">
              <span>F4</span> Game Zone
            </h1>
            <p>
              Hello Welcome to F4 Game Zone.This is my area to<br></br>{" "}
              represent my creation. Game is really a fantactic thing and also{" "}
              <br></br>Hope you will enjoy during exploring my site and play
              Game!!{" "}
            </p>
            <button>Play now</button>
          </div>
          <div>
            <img id="mainimage" src="./Image.webp" />
          </div>
        </div>
      </div>
       {/* <Front Page Start Here */}
    </>
  );
};
export default Page;
