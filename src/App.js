import React from "react";
import Slider from "react-slick";
import BarCard from "./BarCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RightArrow(props) {
  return (
    <button
      class="h-16 w-16 backdrop-filter backdrop-blur-lg rounded-full absolute top-40 md:top-32 right-5"
      style={props.style}
      onClick={props.onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 stroke-current text-white my-auto mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        // stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

const LeftArrow = (props) => {
  return (
    <button
      class="h-16 w-16 backdrop-filter backdrop-blur-lg rounded-full absolute top-40 md:top-32 left-5 z-50"
      style={props.style}
      onClick={props.onClick}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 stroke-current text-white my-auto mx-auto"
        fill="none"
        viewBox="0 0 24 24"
        // stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
};

export default function App() {
  const [itemsToShow, setItemsToShow] = React.useState(1);

  React.useEffect(() => {
    function handleResize() {
      const divider = 420;
      setItemsToShow(Math.ceil(window.innerWidth / divider));
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: itemsToShow > 6 ? 6 : itemsToShow,
    slidesToScroll: 1,
    nextArrow: <RightArrow />,
    prevArrow: <LeftArrow />,
  };

  const barLib = [
    {
      barName: "FUBAR",
      barDescription: "Cookies & Cream",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FFUBAR.png?alt=media&token=2af87e29-d784-45e1-901a-1eb44dc74121",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker-4.gif?alt=media&token=dd1fd2be-9c36-4416-aa8d-224a832b8fc7",
    },
    {
      barName: "BF",
      barDescription: "Blueberry",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FBF.png?alt=media&token=b80b070e-c0eb-4eb3-bc7a-85e51a64554d",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker-2.gif?alt=media&token=450edc55-e532-4555-8d8a-3b325929c0f9",
    },
    {
      barName: "FBR",
      barDescription: "S'Mores",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FFBR.png?alt=media&token=85907a65-5a51-46b2-ab21-c5242950ed11",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker-3.gif?alt=media&token=cfda7901-239d-4642-888b-6e073067de28",
    },
    {
      barName: "KBAR",
      barDescription: "Peanut Butter",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FKBAR.png?alt=media&token=5d749db3-8c5d-4453-a387-cdad15222c9e",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker-5.gif?alt=media&token=db3b3798-513e-4747-b6cf-b3b45babd1d6",
    },
    {
      barName: "MOAB",
      barDescription: "Chocolate",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FMOAB.png?alt=media&token=ae229d5f-c83e-4f8a-a53f-575cc7908a47",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker.gif?alt=media&token=3fbc2cec-b7e8-448e-95ba-2f09f0e94af5",
    },
    {
      barName: "PR-T",
      barDescription: "Birthday Cake",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FPRT.png?alt=media&token=5f6c642b-f44f-4ba6-a97a-e0fa9453f0b7",
      gifURL: "",
    },
    {
      barName: "RED",
      barDescription: "Strawberry",
      imageURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FRED.png?alt=media&token=3d410464-b1fc-49ac-9fca-22f2d2ca1b9a",
      gifURL:
        "https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2Fezgif.com-gif-maker-6.gif?alt=media&token=0ab00ec1-3baf-42b2-86c7-6961da663f38",
    },
  ];

  return (
    <div className="bg-red-500">
      <div
        className="pt-20 w-screen overflow-hidden bg-opacity-20 bg-cover"
        style={{
          backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/leaderboard-d5992.appspot.com/o/battlebars%2FProduct%20Gallery.jpg?alt=media&token=31c15dcc-47f0-4dd8-81e8-de5ba0d184ab")`,
        }}
      >
        <Slider {...settings}>
          {[
            barLib.map((bar) => {
              return (
                <div>
                  <BarCard
                    barName={bar.barName}
                    barDescription={bar.barDescription}
                    className="p-5"
                    imageURL={bar.imageURL}
                    gifURL={bar.gifURL}
                  />
                </div>
              );
            }),
          ]}
        </Slider>
      </div>
    </div>
  );
}
