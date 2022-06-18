<script>
    export let size = 48;
</script>

<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"  style={"scale: " + size / 48 + ";"}>
    <path d="M6 36V33H42V36ZM6 25.5V22.5H42V25.5ZM6 15V12H42V15Z"/>
</svg>

<style>
    svg {
        fill: black;
    }

    @media (prefers-color-scheme: dark) {
        svg {
            fill: white;
        }
    }
</style>