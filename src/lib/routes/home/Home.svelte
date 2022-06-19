<script>
    import Header from "../../components/Header.svelte";
    import Base from "../../components/Base.svelte";
    import Footer from "../../components/Footer.svelte";
    import OurApps from "./apps/OurApps.svelte";
    import TheTeam from "./team/TheTeam.svelte";
    import Button from "../../components/Button.svelte";
    import NavBar from "../../components/NavBar.svelte";
</script>

<svelte:head>
    <title>Peroxaan Studios</title>
</svelte:head>

<NavBar />
<Base>
    <Header>    
        <h1 class="px-gradient">Peroxaan Studios</h1>
        <p class="lead">We make cool apps, games, and services for iOS, Android, macOS, Windows, and the Web.</p>
        <div id="followTwitter">
            <Button text={"Follow on Twitter"} href="https://twitter.com/Peroxaan" hrefNewTab={true}/>
        </div>
    </Header>
    <div id="apps"><OurApps/></div>
    <div id="team"><TheTeam/></div>
    <Footer/>
</Base>

<style>
    #followTwitter {
        margin-top: 1.25rem;
    }

    #apps, #team {
        width: 100%;
        padding-top: 3rem;
    }
</style>