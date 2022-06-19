<script>
    import Base from "../../components/Base.svelte";
    import Header from "../../components/Header.svelte";
    import Footer from "../../components/Footer.svelte";
    import NavBar from "../../components/NavBar.svelte";
import DownloadItem from "./DownloadItem.svelte";
</script>

<svelte:head>
    <title>Downloads</title>
</svelte:head>

<NavBar/>
<Base>
    <Header>
        <h1 class="px-gradient">Downloads</h1>
        <p class="lead">Here you can find downloads for press kits!</p>
    </Header>

    <div id="content">
        <h3>Last Updated: June 2022</h3>
        <DownloadItem 
            iconUrl={"./resources/images/logo.png"}
            title={"Peroxaan Logos"}
            description={"Includes the Peroxaan logo and the Aerosketch, Talon and Ruby icons."}
            downloadUrl={"https://dl.peroxaan.com/PeroxaanPressKitJune2022v2.zip"} />
        <DownloadItem 
            iconUrl={"./resources/images/apps/Talon.png"}
            title={"Talon"}
            description={"Includes the Talon icon, social media launch graphic and App Store screenshots."}
            downloadUrl={"https://dl.peroxaan.com/TalonPressKitJune2022v2.zip"} />
        <DownloadItem 
            iconUrl={"./resources/images/apps/Ruby.png"}
            title={"Ruby"}
            description={"Includes the Ruby icon and App Store screenshots (iPhone, iPad and Apple Watch) and app screenshots."}
            downloadUrl={"https://dl.peroxaan.com/RubyPressKitJune2022v2.zip"} />
    </div>
    <Footer/>
</Base>

<style>
    #content {
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-bottom: 3rem !important;
        max-width: 720px;
    }

    h3 {
        margin-bottom: 1rem;
    }
</style>