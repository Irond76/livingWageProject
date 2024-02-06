<script>
import { onMount } from 'svelte';
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
      labels: ["State Minimum Wage", "State Living Wage"],
      datasets: [{
        data: [`${singleAdult.adult.stateMinimumWage}`, `${singleAdult.adult.stateLivingWage}`],
        borderWidth: 1,
        backgroundColor: ['#a98467', '#FFE8D6'], 
        barPercentage: .75
      }],
    },
    options: {
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
                text: 'Minimum Wage Vs. Living Wage',
                color: '#fff'
            },
        legend: {
                display: false,
        },
      }
    }
  });
}
onMount(
    createchart1
)

</script>
<header>
    <div class="state-header-container">
        <h1>Alabama</h1>
        <img src={img} alt="alabama">
    </div>
</header>
<main>
    <div class="chart-one">
        <canvas id="myChart" ></canvas>
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
        width: 30dvw;
        height: 30dvh;
        background-color: #424242;
        margin-top: 1em;
    }
    main {
        display: grid;
        width: 100dvw;
        height: 60dvh;
        background-color: #B7B7A4;
        justify-items: center;
    }

</style>