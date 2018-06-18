<template>
    <section class="columns is-multiline is-centered">
        <div class="column is-8">
            <p>softeare</p>
            <TableComponent></TableComponent>
        </div>
    </section>
</template>
<script>
import TableComponent from "../components/Table.vue";
export default {
  components: {
    TableComponent
  }
};
</script>