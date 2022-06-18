<script>
    import Footer from "../../components/Footer.svelte";
    import Base from "../../components/Base.svelte";
    import NavBar from "../../components/NavBar.svelte";
    import Header from "../../components/Header.svelte";
import GetAppButtons from "../../components/GetAppButtons.svelte";
</script>

<svelte:head>
    <title>Ruby - Peroxaan Studios</title>
</svelte:head>

<NavBar />
<Base>
    <Header>
        <div id="app_info" class="shadow-light">
            <div id="app_header">
                <img id="app_icon" class="shadow" src="./resources/images/apps/Ruby.png" alt={"Ruby icon"} />
                <div id="app_details">
                    <h2>Ruby</h2>
                    <p>Ruby is an app built to optimize your news experience. It's a new way to read the news.</p>
                </div>
            </div>
            <GetAppButtons
                    appStore={'2'}
                    googlePlay={'3'} />
        </div>
        <img class="shadow-strong" id="app_image" src="./resources/images/screenshots/Ruby.png" alt='Ruby screenshot' />
    </Header>

    <Footer />
</Base>

<style>
    #app_info {
        background-color: white;
        padding: 1rem;
        border-radius: .5rem;
    }
    #app_icon {
        height: 100px;
        width: 100px;
        border-radius: 20px;
    }

    #app_image { 
        height: 500px;
        margin: 2rem 0rem;
    }

    #app_header {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        border-radius: .5rem;
    }

    @media (min-width:768px) {
        #app_icon {
            margin-right: 2rem;
        }

        #app_header {
            flex-direction: row;
            text-align: left;
        }
    }

    @media (prefers-color-scheme: dark) {
        #app_info {
            background-color: #181818;
        }
    }
</style>