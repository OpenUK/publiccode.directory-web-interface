<template>
    <div class="wrapper">
        <AppHero title='How to join our ranks' moto='come be part of the ocean'></AppHero>
        <div class="section container">
            <section class="columns is-centered is-multiline">
                <div class="column is-8">
                         <h4 class='is-size-4'>
            <a id="Getting_involved_43"></a>Getting involved</h4>
          <p>There are a few ways you can get involved.</p>
          <h5 class='is-size-5'>
            <a id="Technical_Git_users_48"></a>Technical Git users:</h5>
          <ul class='styled'>
            <li>Get the database file</li>
            <li>Add your entries</li>
            <li>Add your metadata files to your repo</li>
            <li>Make a pull request on the database</li>
            <li>When accepted, you should see your entry in the directory</li>
          </ul>
          <h5 class='is-size-5'>
            <a id="Nontechnical_git_users_56"></a>Non-technical git users</h5>
          <p>Raise a Github issue with your comments or inclusions</p>
          <h5 class='is-size-5'>
            <a id="Nontechnical_users_61"></a>Non-technical users</h5>
          <p>Get in touch with OpenUK and share your thoughts:
            <a href="https://openuk.uk">OpenUK</a>
          </p>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import AppHero from "@/components/Hero.vue";
    export default {
      components: {
        AppHero
      }
    };
</script>
