<script>
    import { Route } from 'tinro';
    import Aerosketch from './lib/routes/apps/Aerosketch.svelte';
    import Talon from './lib/routes/apps/Talon.svelte';
    import Ruby from './lib/routes/apps/Ruby.svelte';
    import Downloads from './lib/routes/downloads/Downloads.svelte';
    import Home from './lib/routes/home/Home.svelte';
    import Privacy from './lib/routes/Privacy.svelte';
</script>

<Route path="/">
    <Home/>
</Route>

<Route path="/Aerosketch">
    <Aerosketch />
</Route>

<Route path="/Talon">
    <Talon />
</Route>

<Route path="/Ruby">
    <Ruby />
</Route>

<Route path="/downloads">
    <Downloads/>
</Route>

<Route path="/privacy">
    <Privacy />
</Route>

<style>
    :global(*) {
        margin: 0;
        padding: 0;
    }

    :global(body) {
        background-color: #e8e8e8;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        line-height: 1.5;
        font-size: 1rem;
        font-weight: 400;
        color: black;
    }

    :global(h1) {
        font-size: 2.5rem;
    }

    :global(h2) {
        font-size: 2rem;
    }

    :global(.lead) {
        font-size: 1.25rem;
        font-weight: 300;
    }

    :global(.px-gradient) { 
        background-image: linear-gradient(to right, #FF6C8B, #eb6fa5, #FF003F);
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
    }

    :global(.muted-text) {
        color: #6c757d !important;
        text-decoration: none !important;
        -webkit-text-decoration-skip: objects;
    }

    :global(.shadow) {
        filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.25));
    }

    :global(.shadow-strong) {
        filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.5));
    }

    :global(.shadow-light) {
        filter: drop-shadow(0 0 0.5rem rgba(0,0,0,0.1));
    }

    @media (prefers-color-scheme: dark) {
        :global(body) {
            background-color: #000;
            color: white;
        }
    }
</style>  