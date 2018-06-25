<template>
    <section class="hero is-primary is-medium">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
            <app-navigation></app-navigation>
        </div>

        <!-- Hero content: will be in the middle -->
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">
                    {{ title }}
                </h1>
                <h2 class="subtitle">
                    {{ moto }}
                </h2>
            </div>
        </div>

        <!-- Hero footer: will stick at the bottom -->
        <div class="hero-foot">
            <nav class="tabs">
                <div class="container">
                    <ul>
                        <li class="is-active">
                            <!-- <a>Overview</a> -->
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </section>
</template>
<script>
    import Navigation from "@/components/Navigation.vue";
    export default {
      name: "AppHero",
      props: {
        title: String,
        moto: String
      },

      data() {
        return {};
      },
      components: {
        "app-navigation": Navigation
      }
    };
</script>
