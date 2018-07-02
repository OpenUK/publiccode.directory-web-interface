<template>
    <footer class="footer" id="footer">
        <div class="content has-text-centered">
            <p>This project was possible due to the following partners</p>
            <div class="images">
                <a class='footer-image' href="//openuk.uk/" target="_blank" rel='noopener'>
                    <object class='partner-image' data="./img/logos/OpenUK-logo.svg" type="image/svg+xml">OpenUK</object>
                </a>
                <a class='footer-image' href="//publiccode.eu/" target="_blank" rel='noopener'>
                    <object class='partner-image' data="./img/logos/public-code-logo.svg" type="image/svg+xml">Public Code EU</object>
                </a>
                <a class='footer-image' href="//fsfe.org/" target="_blank" rel='noopener'>
                    <object class='partner-image' data="./img/logos/fsfe-logo.svg" type="image/svg+xml">Free Software Foundation Europe</object>
                </a>
            </div>
            <p>&copy; 2018 - Copyright OpenUK</p>
        </div>
    </footer>
</template>

<script>
    export default {
      name: "Footer"
    };
</script>

<style lang="scss" scoped>
    .images {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .footer-image {
        margin-right: 2.5rem;
        display: block;
        &:last-child {
          margin-right: 0;
        }
      }

      .partner-image {
        height: 70px;
      }
    }
</style>
