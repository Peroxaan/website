<script>
import Base from "../components/Base.svelte";
import Header from "../components/Header.svelte";
import Footer from "../components/Footer.svelte";

</script>

<Base>
    <Header>
        <h1>Downloads</h1>
        <p class="lead">Here you can find downloads for press kits!</p>
    </Header>

    <div id="content">
        <h2>Last Updated: June 2022</h2>
        <p>TODO: Buttons</p>
    </div>

    <Footer/>
</Base>

<style>
h2 {
    font-weight: normal;
}

#content {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 3rem !important;
}
</style>