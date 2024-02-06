<script>
import { states } from '../data/StatesList';
let stateNames = states
</script>

<header>
    <div class="header-title">
        <div>
            <h1>Living Wage By State</h1>
        </div>

    </div>
</header>
<div class="state-names">
    {#each stateNames as states}
    <div class="names">
        <a href={states.state}>{states.state}</a> 
    </div>
    {/each}
</div>

<style>
    .state-names {
        width: 80dvw;
        display: grid;
        margin:  0 auto;
        height: 85dvh;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        row-gap: 1em;
    }
    a {
        color: #6B705C;
        text-decoration: none;
    }
    .names {
        margin-top: 1em;
        margin: 1em auto 0 auto;
    }
    a:hover {
        color: #B7B7A4
    }
    header {
        background-color: #6B705C;
        height: 20dvh;
        color: #e3e3e3;
    }
    .header-title {
        display: grid;
        height: 20dvh;
        margin: 0 auto;
        width: fit-content;
        align-items: center;
    }
    
</style>