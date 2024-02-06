<script>
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


</script>
<header>
    <div class="state-header-container">
        <h1>Alabama</h1>
        <img src={img} alt="alabama">
    </div>
</header>


<style>
     header {
        background-color: #6B705C;
        height: fit-content;
        color: #e3e3e3;
        padding: 1em 0;
    }
    .state-header-container {
        text-align: center;
    }


</style>