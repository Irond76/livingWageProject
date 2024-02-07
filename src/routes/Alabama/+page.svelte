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
                text: 'Minimum Wage Vs. Living Wage in $',
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
onMount(() => {
    createchart1(),
    createchart2()
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
<main>
    <h3>Living Wage Data For Single Adult With No Children</h3>
    <div class="chart-one">
        <canvas id="myChart"></canvas>
      </div>
      <h3>Annual Wages</h3>
      <p>&#40;For Minimum Wage And Living Wage&#41</p>
      <div class="chart-one">
          <canvas id="myChart-2" ></canvas>
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
        background-color: #B7B7A4;
        justify-items: center;
        padding-top: 1em;
    }
    

</style>