import Image from "next/image";
const page = () => {
  return (
    <>
    {/* Games Section Start Here */}
      <div id="gamediv">
        <div id="img-text-div">
          <img id="game-image" src="circket.jpeg"/>
          <div id="game-button"> CIRCKET</div>
        </div>

        <div id="img-text-div">
          <img id="game-image" src="vicecity.jpeg"></img>
          <div id="game-button">VICE CITY</div>
        </div>

        <div id="img-text-div">
          <img id="game-image" src="pubg.jpeg"></img>
          <div id="game-button">PUBG</div>
        </div>
      </div>
      <div id="gamediv">
        <div id="img-text-div">
          <img id="game-image" src="thewar.jpeg"></img>
          <div id="game-button">THE WAR</div>
        </div>

        <div id="img-text-div">
          <img id="game-image" src="subway.jpeg"></img>
          <div id="game-button">SUBWAY</div>
        </div>

        <div id="img-text-div">
          <img id="game-image" src="carrace.jpeg"></img>
          <div id="game-button">CAR RACE</div>
        </div>
      </div>
       {/* Games Section Ends Here */}
    </>
  );
};
export default page;
