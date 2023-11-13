import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  return (
    <>
      <div className="sm:hidden lg:flex items-center justify-center rounded-3xl bg-white">
        <Chart
          type="pie"
          width={900}
          height={550}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                  },
                },
              },
            },
            colors: [
              "#5F7DC8",
              "#0A3EBE",
              "#69DCCA",
              "#08AF96",
              "#B4BEBD",
              "#787E7D",
            ],

            labels: [
              "BURNT 11.1%",
              "CEX LISTING 22.2%",
              "ADD LIQUIDITY 33.3%",
              "ADVISOR AND TEAM 11.1%",
              "COMMUNITY AND PARTNERSHIPS 11.1%",
              "DEVELOPMENT 11.1%",
            ],
          }}
        ></Chart>
      </div>
      <div className="sm:hidden  md:flex lg:hidden items-center justify-center rounded-3xl bg-white">
        <Chart
          type="pie"
          width={600}
          height={550}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
            colors: [
              "#5F7DC8",
              "#0A3EBE",
              "#69DCCA",
              "#08AF96",
              "#B4BEBD",
              "#787E7D",
            ],
            labels: [
              "BURNT 11.1%",
              "CEX LISTING 22.2%",
              "ADD LIQUIDITY 33.3%",
              "ADVISOR AND TEAM 11.1%",
              "COMMUNITY AND PARTNERSHIPS 11.1%",
              "DEVELOPMENT 11.1%",
            ],
          }}
        ></Chart>
      </div>
      <div className="sm:flex md:hidden items-center justify-center  overflow-x-auto pl-28  bg-white">
        <Chart
          className="piec"
          type="pie"
          width={530}
          height={350}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
            colors: [
              "#5F7DC8",
              "#0A3EBE",
              "#69DCCA",
              "#08AF96",
              "#B4BEBD",
              "#787E7D",
            ],

            labels: [
              "BURNT 11.1%",
              "CEX LISTING 22.2%",
              "ADD LIQUIDITY 33.3%",
              "ADVISOR AND TEAM 11.1%",
              "COMMUNITY AND PARTNERSHIPS 11.1%",
              "DEVELOPMENT 11.1%",
            ],
          }}
        ></Chart>
      </div>
    </>
  );
};

export default Piechart;
