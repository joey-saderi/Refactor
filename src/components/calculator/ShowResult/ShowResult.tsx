import React from "react";

const ShowResult = (props: IShowResult) => {
  return (
    <div className="CalculatorResult" id="CalculatorResult">
      <div className="eachSvgBox">
        {props.weekly > 0 && (
          <h3 className="CalcH3">
            {props.weekly < 1000000
              ? props.weekly.toString().slice(0, 3)
              : props.weekly.toLocaleString().slice(0, 5)}
            <p>{props.weekly >= 1000000 ? "میلیون" : "هزار"} تومان</p>
          </h3>
        )}
        <div className="SvgDisc">
          <svg viewBox="0 0 600 600">
            <g transform="translate(300, 300)">
              <g className="arcs">
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-gradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  className="gauge-backgroundArc"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                  style={{ fill: "rgb(230, 230, 230)" }}
                ></path>
                <path
                  className="gauge-arc"
                  fill="url(#12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient)"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                ></path>
                <path className="gauge-target"></path>
              </g>
            </g>
          </svg>
        </div>
        <p className="UnderText">درآمد هفتگی</p>
      </div>
      <div className="eachSvgBox">
        {props.monthly && (
          <h3 className="CalcH3">
            {props.monthly.toLocaleString().slice(0, 5)}
            <p>{props.monthly >= 1000000 ? "میلیون" : "هزار"} تومان</p>
          </h3>
        )}
        <div className="SvgDisc">
          <svg viewBox="0 0 600 600">
            <g transform="translate(300, 300)">
              <g className="arcs">
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-gradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  className="gauge-backgroundArc"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                  style={{ fill: "rgb(230, 230, 230)" }}
                ></path>
                <path
                  className="gauge-arc"
                  fill="url(#12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient)"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                ></path>
                <path className="gauge-target"></path>
              </g>
            </g>
          </svg>
        </div>
        <p className="UnderText">درآمد ماهانه</p>
      </div>
      <div className="eachSvgBox">
        {props.daily > 0 && (
          <h3 className="CalcH3">
            {props.daily < 1000000
              ? props.daily.toString().slice(0, 3)
              : props.daily.toLocaleString().slice(0, 5)}
            <p>{props.daily >= 1000000 ? "میلیون" : "هزار"} تومان</p>
          </h3>
        )}
        <div className="SvgDisc">
          <svg viewBox="0 0 600 600">
            <g transform="translate(300, 300)">
              <g className="arcs">
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-gradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <defs>
                  <linearGradient
                    id="12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient"
                    x1="0"
                    x2="100%"
                  >
                    <stop
                      className="gaugeGradient-start"
                      offset="0%"
                      stop-color="rgb(75,163,206)"
                      stop-opacity="1"
                    ></stop>
                    <stop
                      className="gaugeGradient-end"
                      offset="100%"
                      stop-color="#a3678b"
                      stop-opacity="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <path
                  className="gauge-backgroundArc"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                  style={{ fill: "rgb(230, 230, 230)" }}
                ></path>
                <path
                  className="gauge-arc"
                  fill="url(#12036cef-b819-43c7-9e09-ddec8b2b9f1d-meetsExpectationsGradient)"
                  d="M-96.8340087248707,207.6612018511683A20,20,0,0,1,-124.95670050609097,216.53134414821122A250,250,0,1,1,124.95670050609105,216.5313441482112A20,20,0,0,1,96.83400872487076,207.66120185116827L96.83400872487077,207.66120185116827A20,20,0,0,1,104.96362842511648,181.8863290844974A210,210,0,1,0,-104.96362842511637,181.88632908449745A20,20,0,0,1,-96.8340087248707,207.6612018511683Z"
                ></path>
                <path className="gauge-target"></path>
              </g>
            </g>
          </svg>
        </div>
        <p className="UnderText">درآمد روزانه</p>
      </div>
    </div>
  );
};

interface IShowResult {
  weekly: number;
  monthly: number;
  daily: number;
}

export default ShowResult;