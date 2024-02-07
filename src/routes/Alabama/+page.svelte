<script>
import { onMount, onDestroy } from 'svelte';
import  { DataSingleAdult } from '../../data/AlabamaData';
import { DataSingleAdultOneChild } from '../../data/AlabamaData';
import { DataSingleAdultTwoChildren } from '../../data/AlabamaData';
import { DataSingleAdultThreeChildren } from '../../data/AlabamaData';
import { DataTwoAdults } from '../../data/AlabamaData';
import { DataTwoAdultsOneChild } from '../../data/AlabamaData';
import { DataTwoAdultsTwoChildren } from '../../data/AlabamaData';
import { DataTwoAdultsThreeChildren } from '../../data/AlabamaData';
import { DataIndustryWages } from '../../data/AlabamaData';
import img from '$lib/images/alabama.webp';

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
function createchart1() {
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
function createchart2() {
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
function createchart3() {
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
function createchart4() {
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
function createchart5() {
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
function createchart6() {
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
function createchart7() {
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
function createchart8() {
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

onMount(() => {
    createchart1(),
    createchart2(),
    createchart3(),
    createchart4(),
    createchart5(),
    createchart6(),
    createchart7(),
    createchart8()
})
onDestroy(() => {
    return {}
})


</script>
<header>
    <div class="state-header-container">
        <h1>Alabama</h1>
        <img src={img} alt="alabama">
    </div>
</header>
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



<style>
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
    

</style>