<template>
  <div class="homepage">
    <AppHero title='Welcome to the Public Code Directory' moto='Where we make it easy to find Open Source Software'></AppHero>
    <div class="section container">
      <section class=" columns is-centered is-multiline">
        <div class="column is-8 features">
          <div class="image">
            <object class='feature-image' data="./img/icons/sketching.svg" type="image/svg+xml">Your browser doesnt support SVG's => Download and use a proper OSS browser like
              <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel='noopener'>Firefox</a>
            </object>
          </div>
          <div class="feature">
            <h3 class="is-size-3">What software?</h3>
            <p>Lately we've noticed that everyone is on the bandwagon of the OSS but because there are thousands of individual developers and companies out there that try to help communities we've decided to create this project the
              <strong>Public Code Directory</strong>
            </p>
          </div>
        </div>
        <div class="column is-8 features">
          <div class="image">
            <object class='feature-image' data="./img/icons/color-balance.svg" type="image/svg+xml">Your browser doesnt support SVG's => Download and use a proper OSS browser like
              <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel='noopener'>Firefox</a>
            </object>
          </div>
          <div class="feature">
            <h3 class="is-size-3">The purpose of the software?</h3>
            <p>As a very basic explanation, the software is here to make our lifes easier and free us from tideous work using pen and paper documentation and never finding what we're looking for.
            </p>
          </div>
        </div>
        <div class="column is-8 features">
          <div class="image">
            <object class='feature-image' data="./img/icons/api.svg" type="image/svg+xml">Your browser doesnt support SVG's => Download and use a proper OSS browser like
              <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel='noopener'>Firefox</a>
            </object>
          </div>
          <div class="feature">
            <h3 class="is-size-3">Where do we find the software?</h3>
            <p>Sotware is everywhere around us and in order to be able to make it enter the public mind and to be used as such in the public domain we're finding the software for you.
            </p>
            <p>All the software is their creators responsability and as such we only gather the information automatically and dispalye it for your better use.</p>
          </div>
        </div>
        <div class="column is-8 bottom-link">
          <h4 class="is-size-4">
            Find ou more details on the
          </h4>
          <p>We provide various functionalities to make it as easy as humanly possible to find what you're looking for
            <router-link to='/software' class='button is-primary is-outlined'>Software page
              <object class='link-svg' data="./img/icons/forward.svg" type="image/svg+xml">Your browser doesnt support SVG's => Download and use a proper OSS browser like
                <a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel='noopener'>Firefox</a>
              </object>
            </router-link>
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

<style lang='scss' >
  .is-size-5,
  .is-size-4 {
    padding: 0.5rem 0;
    font-weight: bold;
  }
  .is-bold {
    font-weight: bold;
  }
  ul.styled {
    padding-left: 3rem;
    list-style-type: circle;
  }
  .link-svg {
    height: 30px;
    padding-left: 0.75rem;
  }
</style>

<style  lang='scss' scoped>
  .features {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  .feature-image {
    height: 120px;
  }
  .bottom-link {
    padding-bottom: 3rem;
  }
  @media screen and(min-width: 576px) {
    .features {
      .image,
      .feature {
        width: 50%;
      }
      .image {
        text-align: center;
      }
      &:nth-child(even) {
        .image {
          order: 2;
        }
      }
    }
  }
</style>
