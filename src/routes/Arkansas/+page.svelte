<script>
    import { onMount} from 'svelte';
    import  { DataSingleAdult } from '../../data/ArkansasData.js';
    import { DataSingleAdultOneChild } from '../../data/ArkansasData.js';
    import { DataSingleAdultTwoChildren } from '../../data/ArkansasData.js';
    import { DataSingleAdultThreeChildren } from '../../data/ArkansasData.js';
    import { DataTwoAdults } from '../../data/ArkansasData.js';
    import { DataTwoAdultsOneChild } from '../../data/ArkansasData.js';
    import { DataTwoAdultsTwoChildren } from '../../data/ArkansasData.js';
    import { DataTwoAdultsThreeChildren } from '../../data/ArkansasData.js';
    import { DataIndustryWages } from '../../data/ArkansasData.js';
    import img from '$lib/images/Arkansas.webp';
    
    
    
    // Your Wage Data =================================================
    $:yourWage = 0
    function handleOnSubmit() {
        compareWageFunc();
        compareWageFunc2();
      }
    // ================================================================
    // Single Adult Data ===============================================
    const singleAdult = DataSingleAdult;
    const adultOneChild = DataSingleAdultOneChild;
    const adultTwoChildren = DataSingleAdultTwoChildren;
    const adultThreeChildren = DataSingleAdultThreeChildren;
    // =================================================================
    
    // Two Adults Data =================================================
    const twoAdults = DataTwoAdults;
    const twoAdultsOneChild = DataTwoAdultsOneChild;
    const twoAdultsTwoChildren = DataTwoAdultsTwoChildren;
    const twoAdultsThreeChildren = DataTwoAdultsThreeChildren
    // =================================================================
    
    // Industry Data ===================================================
    const industrieSalaries = DataIndustryWages;
    // =================================================================
    
    // Single Adult Functions ==========================================
    function singleChart1() {
        const ctx = document.getElementById('myChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${singleAdult.adult.stateMinimumWage}`, `${singleAdult.adult.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart2() {
        const ctx1 = document.getElementById('myChart-2');
      new Chart(ctx1, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${singleAdult.adult.annualStateMinimumWage}`, `${singleAdult.adult.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart3() {
        const ctx2 = document.getElementById('myChart-3');
      new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${adultOneChild.adultOneChild.stateMinimumWage}`, `${adultOneChild.adultOneChild.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart4() {
        const ctx3 = document.getElementById('myChart-4');
      new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${adultOneChild.adultOneChild.annualStateMinimumWage}`, `${adultOneChild.adultOneChild.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart5() {
        const ctx4 = document.getElementById('myChart-5');
      new Chart(ctx4, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${adultTwoChildren.adultTwoChildren.stateMinimumWage}`, `${adultTwoChildren.adultTwoChildren.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart6() {
        const ctx5 = document.getElementById('myChart-6');
      new Chart(ctx5, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${adultTwoChildren.adultTwoChildren.annualStateMinimumWage}`, `${adultTwoChildren.adultTwoChildren.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart7() {
        const ctx7 = document.getElementById('myChart-7');
      new Chart(ctx7, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${adultThreeChildren.adultThreeChildren.stateMinimumWage}`, `${adultThreeChildren.adultThreeChildren.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function singleChart8() {
        const ctx8 = document.getElementById('myChart-8');
      new Chart(ctx8, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${adultThreeChildren.adultThreeChildren.annualStateMinimumWage}`, `${adultThreeChildren.adultThreeChildren.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    // ==================================================================
    // Adult Couple Functions ===========================================
    function couplesChart1() {
        const ctx9 = document.getElementById('myChart-9');
      new Chart(ctx9, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${twoAdults.twoAdults.stateMinimumWage}`, `${twoAdults.twoAdults.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart2() {
        const ctx10 = document.getElementById('myChart-10');
      new Chart(ctx10, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${twoAdults.twoAdults.annualStateMinimumWage}`, `${twoAdults.twoAdults.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart3() {
        const ctx11 = document.getElementById('myChart-11');
      new Chart(ctx11, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${twoAdultsOneChild.twoAdultsOneChild.stateMinimumWage}`, `${twoAdultsOneChild.twoAdultsOneChild.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart4() {
        const ctx12 = document.getElementById('myChart-12');
      new Chart(ctx12, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${twoAdultsOneChild.twoAdultsOneChild.annualStateMinimumWage}`, `${twoAdultsOneChild.twoAdultsOneChild.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart5() {
        const ctx13 = document.getElementById('myChart-13');
      new Chart(ctx13, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${twoAdultsTwoChildren.twoAdultsTwoChildren.stateMinimumWage}`, `${twoAdultsTwoChildren.twoAdultsTwoChildren.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart6() {
        const ctx14 = document.getElementById('myChart-14');
      new Chart(ctx14, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${twoAdultsTwoChildren.twoAdultsTwoChildren.annualStateMinimumWage}`, `${twoAdultsTwoChildren.twoAdultsTwoChildren.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart7() {
        const ctx15 = document.getElementById('myChart-15');
      new Chart(ctx15, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage", "Living Wage"],
          datasets: [{
            data: [`${twoAdultsThreeChildren.twoAdultsThreeChildren.stateMinimumWage}`, `${twoAdultsThreeChildren.twoAdultsThreeChildren.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Minimum Wage Vs. Living Wage in $ per hour',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function couplesChart8() {
        const ctx16 = document.getElementById('myChart-16');
      new Chart(ctx16, {
        type: 'bar',
        data: {
          labels: ["Minimum Wage Annual", "Living Wage Annual"],
          datasets: [{
            data: [`${twoAdultsThreeChildren.twoAdultsThreeChildren.annualStateMinimumWage}`, `${twoAdultsThreeChildren.twoAdultsThreeChildren.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Annual Wages in $',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    // ==================================================================
    // All Industry Functions ===========================================
    function industryChart1() {
        const ctx17 = document.getElementById('myChart-17');
      new Chart(ctx17, {
        type: 'bar',
        data: {
          labels: ["Engineering", "Landscape/Maint", "Financial", "Social Work", "Computer/Math", "Construction", "Education", "Farming/Forestry", "Food Service","Healthcare Practitioners", "Healthcare Support", "Installers/Maintenance", "Legal", "Management", "Office Administration", "Production", "Protective Services", "Sales", "Transportation/Moving"],
          datasets: [{
            data: [`${industrieSalaries.ArchitectureEngineering}`, `${industrieSalaries.BuildingGroundsCleaningMaintenance}`, `${industrieSalaries.BusinessFinancial}`, `${industrieSalaries.CommunitySocialService}`, `${industrieSalaries.ComputerMathematical}`, `${industrieSalaries.ConstructionExtraction}`, `${industrieSalaries.Education}`, `${industrieSalaries.FarmingFishingForestry}`, `${industrieSalaries.FoodServiceRelated}`, `${industrieSalaries.HealthcarePractitioners}`, `${industrieSalaries.HealthcareSupport}`, `${industrieSalaries.InstallationMaintenanceRepair}`, `${industrieSalaries.Legal}`, `${industrieSalaries.Management}`, `${industrieSalaries.OfficeAdministrativeSupport}`, `${industrieSalaries.Production}`, `${industrieSalaries.ProtectiveServices}`, `${industrieSalaries.SalesRelated}`, `${industrieSalaries.TransportationMaterialMoving}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539'], 
            barPercentage: 1
          }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
          scales: {
            x: {
                ticks: {
                    color: '#fff',
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff',
                autoSkip: false
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Industry Wages',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function compareWageFunc() {
        const ctx20 = document.getElementById('myChart-20');
      new Chart(ctx20, {
        type: 'bar',
        data: {
          labels: ["Your Wage", "Living Wage"],
          datasets: [{
            data: [yourWage, `${singleAdult.adult.stateLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Your Wage Vs. Living Wage in $ per hour (single w/ no children)',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    function compareWageFunc2() {
        const ctx25 = document.getElementById('myChart-25');
      new Chart(ctx25, {
        type: 'bar',
        data: {
          labels: ["Your Annual Wage", "Annual Living Wage"],
          datasets: [{
            data: [yourWage * 2080, `${singleAdult.adult.annualLivingWage}`],
            borderWidth: 1,
            backgroundColor: ['#7f5539', '#FFE8D6'], 
            barPercentage: .75
          }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
          scales: {
            x: {
                ticks: {
                    color: '#fff'
                },
            grid: {
                drawTicks: false,
                color: '#525252'
            },
            },
            y: {
              beginAtZero: true,
              ticks: {
                color: '#fff'
              },
              grid: {
                drawTicks: false,
                color: '#525252'
            }
            }
          },
          plugins: {
            title: {
                    display: true,
                    text: 'Your Wage Vs. Living Wage in $ per hour (single w/ no children)',
                    color: '#fff'
                },
            legend: {
                    display: false,
            },
          }
        }
      });
    }
    // Initialize State===============
    let showAllData = true;
    let compareWage = false;
    // ===============================
    
    function showData() {
        const chartData = document.querySelector('.div');
        const compareWageData = document.querySelector('.compare');
        showAllData = true;
        compareWage = false;
      if (compareWage === false) {
        compareWageData.classList.add('hidden');
        chartData.classList.remove('hidden');
      }
    }
    function showCompare() {
      const chartData = document.querySelector('.div');
      const compareWageData = document.querySelector('.compare');
      showAllData = false;
      compareWage = true;
      if (showAllData === false) {
        chartData.classList.add('hidden');
        compareWageData.classList.remove('hidden')
      }
    }
    // ==================================================================
    onMount(() => {
      singleChart1();
      singleChart2();
      singleChart3();
      singleChart4();
      singleChart5();
      singleChart6();
      singleChart7();
      singleChart8();
      couplesChart1();
      couplesChart2();
      couplesChart3();
      couplesChart4();
      couplesChart5();
      couplesChart6();
      couplesChart7();
      couplesChart8();
      industryChart1();
      return () => {
      }
    });
    
    
    
    </script>
    <header>
        <div class="state-header-container">
            <h1>Arkansas</h1>
            <img src={img} alt="arizona">
        </div>
    </header>
    
    <main class="light-background">
      <button on:click={showData}>All Data</button>
      <button on:click|preventDefault={showCompare}>Compare Your Wage</button>
    </main>
    
    <!-- Single Adult Section -->
    <div class="div " >
    <main class="light-background">
        <h3>Single Adult With No Children</h3>
        <div class="chart-one">
            <canvas id="myChart"></canvas>
          </div>
          <h3>Annual Wages</h3>
          <p>&#40;For Minimum Wage And Living Wage&#41</p>
          <div class="chart-one">
              <canvas id="myChart-2" ></canvas>
            </div>
    </main>
    <main class="dark-background">
        <h3>Single Adult With One Child</h3>
        <div class="chart-one">
            <canvas id="myChart-3"></canvas>
          </div>
          <h3>Annual Wages</h3>
          <p>&#40;For Minimum Wage And Living Wage&#41</p>
          <div class="chart-one">
              <canvas id="myChart-4" ></canvas>
            </div>
    </main>
    <main class="light-background">
      <h3>Single Adult With Two Children</h3>
      <div class="chart-one">
          <canvas id="myChart-5"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-6" ></canvas>
          </div>
    </main>
    <main class="dark-background">
      <h3>Single Adult With Three Children</h3>
      <div class="chart-one">
          <canvas id="myChart-7"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-8" ></canvas>
          </div>
    </main>
    <!-- Couple Section -->
    <main class="light-background">
      <h3>Couples With No Children</h3>
      <p>&#40;One Adult Working&#41</p>
      <div class="chart-one">
          <canvas id="myChart-9"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-10" ></canvas>
          </div>
    </main>
    <main class="dark-background">
      <h3>Couples With One Child</h3>
      <p>&#40;One Adult Working&#41</p>
      <div class="chart-one">
          <canvas id="myChart-11"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-12" ></canvas>
          </div>
    </main>
    <main class="light-background">
      <h3>Couples With Two Children</h3>
      <p>&#40;One Adult Working&#41</p>
      <div class="chart-one">
          <canvas id="myChart-13"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-14" ></canvas>
          </div>
    </main>
    <main class="dark-background">
      <h3>Couples With Three Children</h3>
      <p>&#40;One Adult Working&#41</p>
      <div class="chart-one">
          <canvas id="myChart-15"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;For Minimum Wage And Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-16" ></canvas>
          </div>
    </main>
    <!-- Industry Section -->
    <main class="light-background " >
      <h3>Industry Wages</h3>
      <p>&#40; Average Annual &#41</p>
      <div class="chart-one industry">
          <canvas id="myChart-17"></canvas>
        </div>
    </main>
    </div>
    
    <div class="compare hidden">
      <main class="dark-background">
        <h3 class="title">Your Wage Vs. Living Wage</h3>
        <form on:change|preventDefault="{handleOnSubmit}">
          <label for="yourWage">Enter Your Hourly Wage $
          <input type="number" name="yourWage" bind:value={yourWage} step=".01"/>
        </label>
        </form>
        <p class='btn-text'> You must refresh page to enter a new wage, click to
        <button class="btn-2" on:click={() => location.reload()}>Refresh</button>
      </p>
        <div class="chart-one">
            <canvas id="myChart-20"></canvas>
        </div>
        <h3>Annual Wages</h3>
        <p>&#40;Your Wage Vs. Living Wage&#41</p>
        <div class="chart-one">
            <canvas id="myChart-25" ></canvas>
        </div>
      </main>
    </div>
    
    
    <style>
      .title {
        margin-bottom: 1em;
      }
        button {
          border: none;
          border-radius: .2em;
          padding: .4em;
          margin: .2em 0;
          background-color: #6B705C;
          color: #fff;
          cursor: pointer;
        }
        button:hover {
          background-color: #424242;
        }
         header {
            background-color: #6B705C;
            height: 40dvh;
            color: #e3e3e3;
            padding: 1em 0;
        }
        .state-header-container {
            text-align: center;
        }
    
        .chart-one {
            display: grid;
            width: 40dvw;
            height: 30dvh;
            background-color: #424242;
            margin-top: 1em;
            margin-bottom: 1em;
        }
        main {
            display: grid;
            width: 100dvw;
            height: fit-content; 
            justify-items: center;
            padding-top: 1em;
        }
        .dark-background {
            background-color: #6B705C;
            color: #fff;
        }
        .light-background {
          background-color: #B7B7A4;
        }
        .industry {
          height: 80dvh;
        }
        :global(.hidden) {
          display: none;
        }
        label {
          margin-bottom: 1em;
        }
        .btn-2 {
          background-color: #424242;
          color: #fff;
        }
        .btn-2:hover {
          background-color: #fff;
          color: #424242;
        }
        .btn-text {
          margin: 1em 1em;
        }
    </style>