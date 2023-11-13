import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  return (
    <>
      <div className="sm:hidden lg:flex items-center justify-center">
        <Chart
          type="pie"
          width={900}
          height={550}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
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
      <div className="sm:hidden  md:flex lg:hidden items-center justify-center">
        <Chart
          type="pie"
          width={600}
          height={550}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
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
      <div className="sm:flex md:hidden items-center justify-center overflow-x-hidden">
        <Chart
          type="pie"
          width={400}
          height={350}
          series={[4, 8, 12, 4, 4, 4]}
          options={{
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
