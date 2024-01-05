"use strict";

const ctx1 = document.getElementById("doughnutChart");
const ctx2 = document.getElementById("barChart");

new Chart(ctx1, {
	type: "doughnut",
	data: {
		labels: ["Cardiology", "Neurology", "Dermatology"],
		datasets: [
			{
				label: "Patient Visit By Department",
				data: [40, 20, 30],
				borderWidth: 1,
				backgroundColor: ["#579aff", "#db48ff", "#8146ff"],
			},
		],
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: "Patient Visited by Department",
			},
		},
		scales: {
			y: {
				min: 0,
				max: 100,
				beginAtZero: true,
				ticks: {
					callback: (value) => {
						return `${value}%`;
					},
					stepSize: 10,
				},
			},
		},
	},
});

new Chart(ctx2, {
	type: "bar",
	data: {
		labels: [
			"Emergency",
			"ICU",
			"Neurology",
			"Cardiology",
			"Gynecology",
			"Urology",
		],
		datasets: [
			{
				label: "",
				data: [30, 55, 80, 40, 65, 82],
				borderWidth: 1,
				backgroundColor: [
					"#579aff",
					"#db48ff",
					"#8146ff",
					"#ff447c",
					"#4cb050",
					"#ff805d",
				],
			},
		],
	},
	options: {
		plugins: {
			title: {
				display: true,
				text: "Employees (Number of staffs acording to department)",
			},
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				beginAtZero: true,
			},
		},
	},
});
