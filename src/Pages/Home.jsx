import React, { useEffect, useRef } from "react";
import { Minus, Search, Sun } from "lucide-react";
import WeatherCard from "../components/WeatherCard";
import UpdateCard from "../components/UpdateCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MonoCard from "../components/MonoCard";
import Chart from "../components/Chart";
import CountryCard from "../components/CountryCard";

const Home = () => {
  const splideRef = useRef(null);

  const HourlyUpdateData = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    if (splideInstance) {
      const handleWheel = (e) => {
        e.preventDefault();
        if (Math.abs(e.deltaY) > 50) {
          if (e.deltaY > 0) {
            splideInstance.go("+1");
          } else {
            splideInstance.go("-1");
          }
        }
      };

      // Get the actual DOM element from the Splide instance
      const splideElement = splideInstance.root;
      splideElement.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        splideElement.removeEventListener("wheel", handleWheel);
      };
    }
  }, []);

  return (
    <div className="w-full h-full">
      <div
        style={{
          backgroundImage: "url('/home-background.webp')",
          backgroundSize: "cover",
        }}
        className="w-full pt-5 md:pt-10 lg:px-[8%] px-3 md:px-10 min-h-screen relative"
      >
        <div className="lg:flex gap-20 z-10">
          <div className="space-y-6 pt-10 w-full lg:w-[60%]">
            <h5 className="flash-yellow flex items-center gap-2">
              <Minus />
              <span className="md:text-2xl">Weather and Forecast</span>
            </h5>
            <h2 className="text-white text-[28px] md:text-5xl font-medium leading-8 md:leading-[3.75rem]">
              Daily Weather Forecast
              <br />
              Update News
            </h2>
            <p className="text-white font-medium md:text-[19px] leading-relaxed">
              Get the latest weather forecast for today with up-to-date
              <br />
              information on temperature, precipitation, and more.
            </p>
            <div className="flex items-center border rounded-lg border-[rgba(255,255,255,0.3)] p-2 mt-8 bg-[rgba(255,255,255,0.3)] backdrop-blur-md">
              <input
                placeholder="Search for location..."
                type="search"
                className="w-full bg-transparent text-white placeholder:text-gray-300 focus:outline-none"
              />
              <button className="px-5 cursor-pointer group">
                <Search className="text-gray-300 group-hover:text-amber-400 transition-colors duration-200" />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
            <WeatherCard />
          </div>
        </div>
      </div>
      {/* hourly updates*/}
      <section className="p-4 lg:mt-10 lg:px-[8%]">
        <div className="text-center space-y-2">
          <h2 className="text-[1.4rem] md:text-[1.8rem] font-medium py-3">
            Hourly Update
          </h2>
          <p className="text-sm md:text-[1rem] max-w-2xl mx-auto">
            The 'Recent Search Weather' section displays the latest weather
            information for your recently searched cities. Stay updated with
            current conditions in your preferred locations.
          </p>
        </div>
        <div className="mt-6">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              wheel: true,
              waitForTransition: true,
              speed: 400,
              perMove: 1,
              gap: "1rem",
              padding: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                2561: {
                  perPage: 8,
                },
                1441: {
                  perPage: 7,
                },
                1025: {
                  perPage: 5,
                },
                769: {
                  perPage: 4,
                },

                480: {
                  perPage: 1,
                },
              },
            }}
            aria-label="Hourly Weather Updates"
          >
            {HourlyUpdateData.map((_, index) => (
              <SplideSlide className="w-full" key={index}>
                <UpdateCard />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      {/* Todays Weather Deatils */}
      <section className="p-4 md:px-[5%] lg:px-[8%]">
        <h2 className="w-full text-center text-[1.4rem] md:text-[1.8rem] font-medium my-4">
          Today Weather Details
        </h2>
        <p className="w-full text-center md:text-[1rem] md:px-4 text-sm lg:w-1/2 mx-auto">
          The 'Recent Search Weather' section displays the latest weather
          information for the cities you have recently searched. Stay up-to-date
          with the weather conditions of your preferred cities with this
          section.
        </p>

        <div className="lg:flex lg:gap-4">
          <div className="md:flex w-full items-center gap-4">
            <div className="w-full">
              <WeatherCard />
            </div>

            <div className="w-full space-y-4">
              <div className="w-full">
                <MonoCard />
              </div>
              <div className="w-full">
                <MonoCard />
              </div>
            </div>
          </div>
          <div className="md:flex lg:w-[50%] lg:block lg:mt-6 mt-4 md:mt-0 space-y-4 w-full md:space-x-4">
            <div className="w-full">
              <MonoCard />
            </div>
            <div className="w-full">
              <div className="border  flex px-18 justify-between items-center py-[2.9rem] border-[rgba(255,255,255,0.3)] rounded-2xl bg-[rgba(255,255,255,0.1)]">
                <div className="flex flex-col items-center">
                  <span className="w-[4rem] h-[4rem] flex mb-4">
                    <Sun className="w-full h-full" />
                  </span>
                  <p className="text-[1rem] font-semibold">Sunrise</p>
                  <p className="text-[1rem] font-semibold">04:06 am</p>
                </div>
                <div className="flex flex-col items-center">
                  <span className="w-[4rem] h-[4rem] flex mb-4">
                    <Sun className="w-full h-full" />
                  </span>
                  <p className="text-[1rem] font-semibold">Sunset</p>
                  <p className="text-[1rem] font-semibold">06:40 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* weekly updates*/}
      <section className="p-4 lg:mt-10 lg:px-[8%]">
        <div className="text-center space-y-2">
          <h2 className="text-[1.4rem] md:text-[1.8rem] font-medium py-3">
            Weekly Weather Forecast
          </h2>
          <p className="text-sm md:text-[1rem] max-w-2xl mx-auto">
            The 'Recent Search Weather' section displays the latest weather
            information for the cities you have recently searched. Stay
            up-to-date with the weather conditions of your preferred cities with
            this section.Stay updated with current conditions in your preferred
            locations.
          </p>
        </div>
        <div className="mt-6">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              wheel: true,
              waitForTransition: true,
              speed: 400,
              perMove: 1,
              gap: "1rem",
              padding: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                2561: {
                  perPage: 8,
                },
                1441: {
                  perPage: 7,
                },
                1025: {
                  perPage: 5,
                },
                769: {
                  perPage: 4,
                },

                480: {
                  perPage: 1,
                },
              },
            }}
            aria-label="Hourly Weather Updates"
          >
            {HourlyUpdateData.map((_, index) => (
              <SplideSlide className="w-full" key={index}>
                <UpdateCard />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      {/* Recent Search*/}
      <section className="p-4 lg:mt-10 lg:px-[8%]">
        <div className="text-center space-y-2">
          <h2 className="text-[1.4rem] md:text-[1.8rem] font-medium py-3">
            Recent Search Weather
          </h2>
          <p className="text-sm md:text-[1rem] max-w-2xl mx-auto">
            The 'Recent Search Weather' section displays the latest weather
            information for the cities you have recently searched. Stay
            up-to-date with the weather conditions of your preferred cities with
            this section.Stay updated with current conditions in your preferred
            locations.
          </p>
        </div>
        <div className="mt-6">
          <Splide
            ref={splideRef}
            options={{
              type: "loop",
              wheel: true,
              waitForTransition: true,
              speed: 400,
              perMove: 1,
              gap: "1rem",
              padding: "1rem",
              arrows: false,
              pagination: false,
              breakpoints: {
                2561: {
                  perPage: 4,
                },
                1441: {
                  perPage: 4,
                },
                1025: {
                  perPage: 3,
                },
                769: {
                  perPage: 2,
                },

                480: {
                  perPage: 1,
                },
              },
            }}
            aria-label="Hourly Weather Updates"
          >
            {HourlyUpdateData.map((_, index) => (
              <SplideSlide className="w-full" key={index}>
                <CountryCard />
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
      {/* Weather in Pictures*/}
      <section className="p-4 lg:mt-10 lg:px-[8%] md:px-[5%]">
        <div className="text-center space-y-2">
          <h2 className="text-[1.4rem] md:text-[1.8rem] font-medium py-3">
            Weather in Pictures
          </h2>
          <p className="text-sm md:text-[1rem] max-w-2xl mx-auto">
            The 'Recent Search Weather' section displays the latest weather
            information for the cities you have recently searched. Stay
            up-to-date with the weather conditions of your preferred cities with
            this section.
          </p>
        </div>
        <div className="mt-4 grid lg:grid-cols-4 gap-3">
          <div className="h-20 rounded-2xl border border-white  md:col-span-2"></div>
          <div className="h-20 rounded-2xl border border-white"></div>
          <div className="h-20 rounded-2xl border border-white"></div>
          <div className="h-20 rounded-2xl border border-white"></div>
          <div className="h-20 rounded-2xl border border-white"></div>
          <div className="h-20 rounded-2xl border border-white md:col-span-2"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
