<template>
  <div class="wrapper">
    <AppHero title='About the magic of OSS' moto='more magic about the project'></AppHero>

    <section class="columns is-centered is-multiline">

      <div class="column is-8">
        <p>Some Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus provident non reiciendis mollitia laborum cupiditate unde dolores commodi est officiis. Beatae sed nesciunt, illo assumenda dolorum laboriosam ipsum quidem odio!</p>
      </div>
    </section>
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
