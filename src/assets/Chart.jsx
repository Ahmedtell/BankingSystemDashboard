import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Charts({ dataValues }) {
  const pieRef = useRef(null);

  useEffect(() => {
    const chart = new Chart(pieRef.current, {
      type: "pie",

      data: {
        labels: ["Individual", "Representative", "Corporate", "Common"],

        datasets: [
          {
            data: dataValues,

            backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"],

            borderWidth: 2,
            borderColor: "#ffffff",
            hoverOffset: 10,
          },
        ],
      },

      options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
          legend: {
            position: "bottom",

            labels: {
              usePointStyle: true,
              pointStyle: "circle",
              padding: 18,

              font: {
                size: 11,
                weight: "600",
              },
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [dataValues]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <canvas ref={pieRef}></canvas>
    </div>
  );
}
