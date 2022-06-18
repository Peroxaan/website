<script>
    import TeamMember from "./TeamMember.svelte";
</script>

<h1>The Team</h1>
<div class="apps">
    <TeamMember 
        icon_bg={"#ffcc80"}
        icon_url={"./resources/images/people/Michael.png"}
        name={"Michael"}
        description={"CEO. Head of iOS Development."}
        twitterUsername={"tme_michael"}
        email={"michael@peroxaan.com"} />
    <TeamMember 
        icon_bg={"#79358c"}
        icon_url={"./resources/images/people/TheLBall.png"}
        name={"TheLBall"}
        description={"Head of Windows Development."}
        twitterUsername={"TheLBall"}
        email={"thelball@peroxaan.com"} />
    <TeamMember 
        icon_bg={"#df797c"}
        icon_url={"./resources/images/people/idkwuu.png"}
        name={"idkwuu"}
        description={"Head of Android Development."}
        twitterUsername={"idkwuu"}
        email={"idkwuu@peroxaan.com"} />
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