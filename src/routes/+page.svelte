<script>
import { states } from '../data/StatesList';
let stateNames = states
</script>

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
</style>