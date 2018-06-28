<template>
  <div class="wrapper">
    <AppHero title='About the magic of OSS' moto='more magic about the project'></AppHero>
    <div class="section container">
      <section class="columns is-centered is-multiline">

        <div class="column is-8">
          <h3 class='is-size-3 is-bold'>
            <a id="Public_Code_Directory_0"></a>Public Code Directory</h3>
          <h4 class='is-size-4'>
            <a id="Where_Open_Source_Software_is_curated_2"></a>Where Open Source Software is curated</h4>
          <p>After seeking contributions to an OpenUK NHS report project, it became apparent that there is lots of Public Administration Open Source being created but no curated list of applications, meaning that lots of local builds are taking place.</p>
          <p>This project aims to enable a single directory segmented in to categories, then indexes of Public code and projects.</p>
          <h4 class='is-size-4'>
            <a id="What_problem_does_this_solve_11"></a>What problem does this solve?</h4>
          <ul class='styled'>
            <li>‘Discoverability’ of Public Code - find out what has been written, who made it and how to get it</li>
            <li>Repo owners manage the description via their normal code repo</li>
            <li>A visitor can discover mature software rather than trawling through thousands of repositories</li>
          </ul>
          <h4 class='is-size-4'>
            <a id="Who_is_behind_it_18"></a>Who is behind it?</h4>
          <p>This is an OpenUK initiative in association with the EU Free Software Policy group to provide a practical tool to support the PMPC campaign.</p>
          <h4 class='is-size-4'>
            <a id="Operations_22"></a>Operations</h4>
          <p>A repo needs to be registered in the database and have meta data within the repo to be included. The index will build the rest on the fly. The full details of the database can be found in the database folder and here is a summary.</p>
          <h4 class='is-size-4'>
            <a id="Sector_categories_26"></a>Sector categories</h4>
          <p>Repositories of public code belong to a set of categories, therefore each have a separate index. For example, these may indicate:</p>
          <ul class='styled'>
            <li>Local administration</li>
            <li>Central government / national</li>
            <li>Healthcare</li>
            <li>Education</li>
            <li>Defence</li>
          </ul>
          <p>A repo may exist in multiple categories if it happened to originate in one of these yet be relevant to more than one. A tag is used to indicate the categories that an entry belongs to.</p>
          <h4>
            <a id="Maintainer_category_39"></a>Maintainer category</h4>
          <p>Code is created and maintained by various organisations, either public, NGO or commercial.</p>
    
          <h4 class='is-size-4'>
            <a id="Supporters_65"></a>Supporters</h4>
          <p>Various public organisations have offered support once the indexes are published. These will be listed in the Supporters page.</p>
          <h4 class='is-size-4'>
            <a id="Licence_70"></a>Licence</h4>
          <p>This software is OpenUK copyright 2018. It is released under the GPLv3 licence. For details see the <router-link to='/licence'>LICENSE</router-link> page.</p>
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
