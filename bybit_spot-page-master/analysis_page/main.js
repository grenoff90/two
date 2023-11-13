// upgrade
const upgradeNote = document.querySelector(".upgrade");
const close = upgradeNote.querySelector(".upgrade > i");

close.addEventListener("click", () => {
    upgradeNote.style.display = "none";
});
// ROI canvas
const ROI = document.querySelector("canvas#ROI").getContext("2d");
Chart.defaults.font.size = 10;

let roiChart = new Chart(ROI, {
    type: 'line',
    data: {
      labels: [  '11-06', '11-07', '11-08', '11-09', '11-10', '11-11', '11-12' ],
      datasets: [
        {
        label: 'Cumulative ROI of the Spot Account',
        data: [-0.02, 0.57, 0.54 , 3.84, 4.18, 4.16 , 4.45],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative price change of BTC (%)',
        data: [1.12, 0.86, 0.95, 1.97, 4.69, 6.38, 5.89],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },
    
    options: {
      responsive: true,
        plugins : {
          layout: {
            padding: {
              top: 20  // Adjust the value as per your requirement
            }
          },
            legend: {
              position: 'top',
              align: 'end',
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    font: {
                        size: 12
                    },
                    color :"black",
                }
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + "%";
                    },
                    color: "#81858c",
                    stepSize: 10,

                },
          grid : {
              color: "#9e9e9e17"
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 3,
            },
          beginAtZero: true,
          grid : {
              color: "#9e9e9e17"
          }
        }
      }
    },
});


// Profits
const Profits = document.getElementById('profits').getContext("2d");

let profitChart = new Chart(Profits, {
  type: 'line',
  data: {
    labels: ['2023-11-06', '', '', '', '', '', '2023-11-12'],
    datasets: [{
      label: 'Cumulative Profits ',
      data: [ -0.5, 18.4, 17.4, 125.92, 138.94, 138.96, 151.34],
      borderWidth: 1.5,
      backgroundColor: "#f7a600",
      borderColor: "#f7a600",
      tension: 0.5,
      pointStyle: "circle"

    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero : true,
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});

// P&L
const PL = document.getElementById('PL').getContext("2d");

let plChart = new Chart(PL, {
  type: 'bar',
  data: {
    labels: ['2023-11-06', '', '', '', '', '', '2023-11-12'],
    datasets: [{
      label: 'P&L ',
      data: [ -0.5, 18.9, 1, 108.52, 13.02 , -0.02, 12.42],
      backgroundColor: [ "#ef454a", "#20b26c", "#ef454a", "#20b26c", "#20b26c", "#ef454a", "#20b26c", "#20b26c", "#ef454a", "#20b26c", "#20b26c", "#20b26c", "#20b26c","#20b26c", "#ef454a", "#ef454a", "#20b26c", "#20b26c", "#20b26c", "#20b26c","#ef454a", "#20b26c", "#ef454a", "#20b26c", "#ef454a", "#20b26c", "#20b26c","#20b26c", "#20b26c", "#20b26c", "#20b26c", "#20b26c", "#20b26c", "#20b26c","#20b26c",],
    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend : {
        display: false
      }
    },
    scales: {
      y: {
        ticks : {
          color: "#81858c",
          stepSize: 5,
      },
      grid : {
        color: "#9e9e9e17"
    }
      },
      x: {
        ticks : {
          color: "#81858c"
      },
      grid : {
        color: "#9e9e9e17"
    }
      }
    }
  }
});


// customization days count (charts)
const daysLi = document.querySelectorAll(".charts ul li");

daysLi.forEach((li) => {
    li.addEventListener("click", (e) => {
      daysLi.forEach((li) => {
        li.classList.remove("active");
      });
        e.currentTarget.classList.add("active");
        if ((e.currentTarget.textContent).includes("7")) {
          // pl chart
          plChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          plChart.data.datasets[0].data =  [-25, 0, -3, -3, -4, 2, 3];
          plChart.update();
          // profits chart
          profitChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          profitChart.data.datasets[0].data = [-25, -26, -28, -30, -32, -29, -25];
          profitChart.update();
          // roi chart
          roiChart.data.labels = ['2023-10-14', '', '', '', '', '', '2023-10-20'];
          roiChart.data.datasets[0].data =  [-20, -20, -21, -22, -23, -20, -19];
          roiChart.update();
        }
         else if ((e.currentTarget.textContent).includes("30"))
        {
          document.querySelector(".three").textContent = '15.91%'
          plChart.data.labels = ['2023-10-13', '', '', '', '', '', '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-11-10',
          ];
          plChart.data.datasets[0].data =  [ 13.4, -4, 2, -3,
            10,
            13.2, -6.3, 15.40, 18.73, -1.5, 21.62, 14.72, 18.6 , 45.6, 55.6, -5.8, -11.31, 3.1, 26.6, 28.2, 25.5, -11.5, 13.5, -5.6, 16, -0.5, 18.9, 1, 108.52, 13.02 , -0.02
          ];
          
          plChart.update();
          // profit Chart
          profitChart.data.labels = ['2023-10-13', '', '', '', '', '', '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-11-10',
          ];
          profitChart.data.datasets[0].data = [271, 232.3, 228.5, 230, 212, 216, 220,
            240,
            315.7,
            329,
            345,
            351,
            359, 348.1, 356.6, 368, 367.2, 359.5, 368.56, 362.2, 355.3, 347.9, 354.6, 367.4, 359.7, 364.8, 354.9, 452.4, 458.2 , 451.5
          ];
          profitChart.update();
          // roichart
          roiChart.data.labels = ['2023-10-13', '', '', '', '', '', '', 
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '2023-11-10',
            ]
            roiChart.data.datasets[0].data =  [
            5, 3 , 2
            ,1.94, 2.54, 2.35, 2.96, 3.53, 3.49, 4.3, 4.9 , 6.5, 7.7, 9.03, 8.79, 9.99, 10.73, 11.13, 11.72, 12.29, 12.43, 12.95, 13.55, 14.14, 13.88, 13.91,12.95, 13.55, 15.81,15.9,15.91
            ];
            roiChart.data.datasets[1].data =  [-1.17, -1.88, -3.72, -4.14, -3.77, -3.81, -2.73, 2.9,  2.73, 2.09, 1.71, 1.44, 2.85, 6.27, 7.13, 7.43 , 18.45, 21.51, 23.56, 22.33, 21.4, 22.07, 23.67, 23.48, 24.08, 26.88, 25.15, 24.35, 25.41, 25.53, 25.02
            ];
            roiChart.update();
        }
        else {
          // pl chart
          plChart.data.labels = ['2023-10-13', '', '', '', '', '', '', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-11-10',
          ];
          plChart.data.datasets[0].data = [-20, -20, -21, -22, -23, -20, -19,
            20,
            10,
            11,
            44,
            20,
            30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
            10,20,33,34,35,36,10,40,50,20,
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
          ];
          plChart.update();
          // profit chart
          profitChart.data.labels = ['2023-10-13', '', '', '', '', '', '', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '2023-11-10',
          ];
            profitChart.data.datasets[0].data = [-25, -26, -28, -30, -32, -29, -25,
              20,
              10,
              11,
              44,
              20,
              30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
              10,20,33,34,35,36,10,40,50,20,
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
              12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
          ];
          profitChart.update();
          // roi chart
          roiChart.data.labels = ['2023-10-13', '', '', '', '', '', '', 
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
          '',
            '2023-11-10',
            ];
            roiChart.data.datasets[0].data =  [-20, -20, -21, -22, -23, -20, -19,
            20,
            10,
            11,
            44,
            20,
            30, 10, 30, 30, 50, 60, 10, 15, 21, 33, 40, 40, 30, 22, 15,14, 5,
            10,20,33,34,35,36,10,40,50,20,
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33, 
            12, 30, 40, 10, 40, 50, 30, 70, 20, 33,22,30 
            ];
            roiChart.data.datasets[1].data =  [0, 1, 8, 8, 8.5, 10, 10.2,
            10,
            5,
            1,
            0,
            3,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0, 
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 ,
            11, 8.1, 2.6, 8, 7, 9, 20, 22, 21, 27, 15, 12, 24, 10, 5,2, 1, 0 
            ];
            roiChart.update();
        }
    });
});






// mobile
const bars = document.querySelector(".bars");
const mobile_menu = document.querySelector(".mobile-menu");
const close_menu = document.querySelector(".mobile-menu > i");
const profile = document.querySelector(".sub-menu a");
const profile_menu = document.querySelector(".sub-menu ul");

bars.addEventListener("click", () => {
  mobile_menu.classList.add("active");
});

close_menu.addEventListener("click", () => {
  mobile_menu.classList.remove("active");
});

profile.addEventListener("click", () => {
  profile_menu.classList.toggle("active");
});