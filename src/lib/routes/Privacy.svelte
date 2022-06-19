<script>
import Base from "../components/Base.svelte";
import Footer from "../components/Footer.svelte";
import Header from "../components/Header.svelte";
import NavBar from "../components/NavBar.svelte";

</script>
<NavBar />
<Base>
    <Header>
        <h1 class="px-gradient">Privacy Policy</h1>
        <p class="lead">Last Updated: September 4th, 2020</p>
    </Header>
    <div class="lead">
        <p>Here at Peroxaan Studios, we believe in protecting our users privacy. 
            Therefore, all of our products are designed to collect little to no data about you,
            and anything that is collected is purely data that the user consents to provide. 
            When we’re collecting data, you will know. We don’t collect anything without letting
            our users know.</p>
        <p>In Talon for iOS/macOS/Android, as of version 1.2 - nothing is being collected by Peroxaan.
            All data you input in the App is handled within the App, and we do not have access to any
            of that data. If you choose to save links inside of the app, that data is stored on 
            device. If you're on an iPhone, iPad, or Mac, that data will additionally be stored on 
            iCloud for easy syncing across your devices. All data you send with Talon is sent directly
            to those parties and we do not save any of that.</p>
        <p>In Aerosketch for iOS, as of beta 16 - nothing is being collected from the users by 
            Peroxaan. However, since we support Game Center for Leaderboards and Achievements,
            some data will be collected by Apple to support that. However, there is no 
            information that we hold. That is subject to change in the future. </p>
        <p>In Electrocam for iOS, as of beta 4 - nothing is being collected from the users by Peroxaan,
            and nothing is being collected by any third parties. This may change in the future.</p>
        <p>In Clicker for iOS, as of beta 6 - nothing is being collected from the users by 
            Peroxaan. However, since we support Game Center for Leaderboards and Achievements,
            some data will be collected by Apple to support that. However, there is no
            information that we hold. That is subject to change in the future.</p>
        <p>In Ruby for iOS, as of version 1.0 - user preferences and saved data are being stored
            on device and in iCloud. Peroxaan does not have access to this data.</p>
        <p>In Peroxaan Stickers for iOS, as of version 2.1 - nothing is being collected from the
            users by Peroxaan, and this will not be changing.</p>
        <p>For all of our apps, there are links to external websites - such as Twitter. We have
            no control over what data they may collect. For that information, please read their 
            respective privacy policies.</p>
        <p>Also, for all apps - we have access to your Crash Reports and Feedback, if you choose
            to submit it. Your name and email may be shared if you submit a crash or send feedback.</p>
    </div>
    <Footer />
</Base>

<style>
    p {
        margin-bottom: 1rem;
    }
</style>