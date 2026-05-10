import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export default function Charts({ dataValues }) {
  const doughnutRef = useRef(null);

  useEffect(() => {
    let doughnutChart;

    const data = {
      labels: ["Individual", "Representative", "Corporate", "Common"],
      datasets: [
        {
          data: dataValues,
          backgroundColor: ["#3b82f6", "#22c55e", "#f59e0b", "#ef4444"],
        },
      ],
    };

    doughnutChart = new Chart(doughnutRef.current, {
      type: "doughnut",
      data,
      options: {
        responsive: true,
        maintainAspectRatio: false, 
        cutout: "65%",
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              font: { size: 11 },
              padding: 10,
            },
          },
        },
      },
    });

    return () => {
      doughnutChart.destroy();
    };
  }, [dataValues]);

  return (
    <div className="flex items-center justify-center w-full h-full">
      <canvas ref={doughnutRef} className="w-full h-full"></canvas>
    </div>
  );
}
