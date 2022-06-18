<nav>
    <div id="root">
        <div id="content">
            <a href="/" id="title" class="px-gradient">Peroxaan Studios</a>
            <div id="links">
                <a class="muted-text" href="/#apps">Apps</a>
                <a class="muted-text" href="/#team">Team</a>
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
    }

    #root {
        display: flex;
        background-color: white;
        justify-content: center;
    }

    #content {
        flex-grow: 1;
        margin: 0.75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        max-width: 720px;
    }

    #links a {
        margin: 0px 6px;
    }

    @media (min-width:576px) {
        #content {
            max-width: 540px
        }
    }
    @media (min-width:768px) {
        #content {
            max-width: 720px
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