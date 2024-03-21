"use client";
import { useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";

export default function Acordion({ dataFAQ }) {
  const [tab, setTab] = useState(-1);
  const tabRef = useRef(null);

  const handleClick = (idx) => {
    setTab(idx === tab ? -1 : idx);
  };

  return (
    <div style={{ minHeight: "calc(100vh - 441px)" }}>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-5xl mt-5 tracking-tight text-center text-blue-900">
          Preguntas frecuentes
        </h2>
      </div>
      <div className="flex flex-wrap justify-center gap-3 py-8 text-lg leading-6 text-gray-900 md:gap-8">
        {dataFAQ.map((data, index) => (
          <div key={data.id} className="w-6/12 space-y-3">
            <Fade
              key={data.id}
              direction={"up"}
              delay={100}
              cascade
              triggerOnce={true}
            >
              <div className="relative transition-all duration-700 border rounded-xl hover:shadow-2xl">
                <div
                  onClick={() => handleClick(index)}
                  className="w-full p-4 text-left cursor-pointer text-white rounded-xl"
                  style={{ backgroundColor: "#105295" }}
                >
                  <div className="flex items-center justify-between">
                    <span className="tracking-wide">{data.question}</span>
                    <span
                      style={
                        tab === index ? { transform: "rotate(180deg)" } : {}
                      }
                      className="transition-transform duration-500 transform fill-current "
                    >
                      <svg
                        className="w-5 h-5 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </span>
                  </div>
                </div>
                <div
                  ref={tabRef}
                  style={
                    tab === index
                      ? {
                          maxHeight: tabRef.current
                            ? `${tabRef.current.scrollHeight}px`
                            : "",
                        }
                      : undefined
                  }
                  className="relative overflow-hidden transition-all duration-700 max-h-0"
                >
                  <div className="px-6 pb-4 text-gray-600">{data.answer}</div>
                </div>
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
