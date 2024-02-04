<header>
    <div class="header-title">
        <div>
            <h1>Living Wage By State</h1>
        </div>

    </div>
</header>


<main>
    <slot />
</main>


<style>
    header {
        background-color: #6B705C;
        height: 15dvh;
        color: #e3e3e3;
    }
    .header-title {
        display: grid;
        height: 20dvh;
        margin: 0 auto;
        width: fit-content;
        align-items: center;
    }
    main {
        background-color: #e3e3e3;
    }
</style>