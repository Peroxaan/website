<script>
    import PxApp from "./PxApp.svelte";
</script>

<h1>Our Apps</h1>
<div class="apps">
    <PxApp 
        icon_bg={"#FF688A"}
        icon_url={"./resources/images/apps/Aerosketch.png"}
        title={"Aerosketch"}
        text={"A new, fun, multiplayer drawing game."}
        href={"/Aerosketch"} />
    <PxApp 
        icon_bg={"#BB22B9"}
        icon_url={"./resources/images/apps/Talon.png"}
        title={"Talon"}
        text={"Talon is designed to make your life easier. Webhooks, made simple."} 
        href={"/Talon"} />
    <PxApp 
        icon_bg={"#b00909"}
        icon_url={"./resources/images/apps/Ruby.png"}
        title={"Ruby"}
        text={"Ruby is a News app with a customizable experience, built for you."} 
        href={"/Ruby"} />
</div>

<style>
    h1 {
        text-align: center;
    }

    .apps {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        padding-bottom: 3rem !important;
    }
</style>