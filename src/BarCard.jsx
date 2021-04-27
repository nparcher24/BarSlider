import React from "react";

export default function BarCard(props) {
  const [showGif, setShowGif] = React.useState(false);

  return (
    <div className="flex flex-col items-center  p-2">
      <div className="absolute z-0 flex flex-col items-center">
        <h2 className="text-white text-4xl ">{props.barName}</h2>
        <h4 className="md:mt-25 text-sm text-white md:text-xs">
          {props.barDescription}
        </h4>
      </div>
      {!showGif ? (
        <img
          className="w-full max-w-lg z-20"
          src={props.imageURL}
          alt="FUBAR Battle Bar Still"
          onMouseEnter={() => {
            setShowGif(true);
          }}
        />
      ) : (
        <img
          className="w-full max-w-lg z-20"
          src={props.gifURL}
          alt="FUBAR Battle Bar"
          onMouseOut={() => {
            setShowGif(false);
          }}
        />
      )}
      <button className="my-10 md:my-15 py-2 px-5 rounded-md bg-black border-2 border-primary hover:bg-primary  hover:border-black text-primary hover:text-black">
        <h2 className="text-md ">ADD TO CART</h2>
      </button>
    </div>
  );
}
