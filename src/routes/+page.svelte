<script>
import { states } from '../data/StatesList';
let stateNames = states
</script>

<div class="state-names">
    {#each stateNames as states}
    <div class="names">
        <a href="/">{states.state}</a> 
    </div>
    {/each}
</div>

<style>
    .state-names {
        width: 90dvw;
        display: grid;
        margin:  0 auto;
        height: 80dvh;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        row-gap: 1em;
    }
    a {
        color: #6B705C;
        text-decoration: none;
    }
    .names {
        margin-top: 1em;
    }
    a:hover {
        color: #B7B7A4
    }
</style>