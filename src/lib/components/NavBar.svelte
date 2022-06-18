<script>
    import Menu from "../icons/Menu.svelte";
</script>
<nav>
    <div id="root">
        <div id="content">
            <div id="nv">
                <a href="/" id="title" class="px-gradient">Peroxaan Studios</a>
                <div id="menu">
                    <Menu size={24}/>
                </div>
            </div>
            <div id="links">
                <a class="muted-text" href="/#apps" tinro-ignore>Apps</a>
                <a class="muted-text" href="/#team" tinro-ignore>Team</a>
                <a class="muted-text" href="/downloads">Downloads</a>
                <a class="muted-text" href="https://newsroom.peroxaan.com">Newsroom</a>
            </div>
        </div>
    </div>
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 69420;
    }

    #title {
        font-size: 1.25rem;
        margin-right: 1rem;
        margin-left: 1rem;
    }

    #root {
        display: flex;
        background-color: white;
        justify-content: center;
        padding: 0.75rem;
    }

    #content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
        max-width: 720px;
    }

    #nv {
        display: inherit;
        justify-content: inherit;
        align-items: inherit;
        flex-grow: 1;
    }

    #links a {
        margin: 0px 6px;
    }

    #links {
        display: inherit;
        margin-right: 0.5rem;
    }

    .hidden {
        display: none;
    }

    #menu {
        margin: -0.5rem;
        display: flex;
        cursor: pointer;
        margin-right: 0.5rem;
    }

    @media (min-width:576px) {
        #content {
            max-width: 540px;
        }
    }
    @media (min-width:768px) {
        #content {
            max-width: 720px;
            flex-direction: row;
            align-items: center;
        }

        #links {
            display: flex;
        }

        #menu {
            display: none;
        }
    }
    @media (min-width:992px) {
        #content {
            max-width: 960px
        }
    }
    @media (min-width:1200px) {
        #content {
            max-width: 1140px
        }
    }

    @media (prefers-color-scheme: dark) {
        #root {
            background-color: #181818;
        }
    }
</style>