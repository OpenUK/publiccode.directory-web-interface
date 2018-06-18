<template>
    <div class="table-container">
        <b-field grouped group-multiline>
            <b-select v-model='selectedoptioin'>
                <option v-for='category in categories' :key="category.id"  :value="category" > {{ category | capitalize }}</option>
            </b-select>

            <b-select v-model='licenceoption'>
                <option v-for='licence in licences' :key="licence.id"  :value="licence" > {{ licence | capitalize }}</option>
            </b-select>

            <b-select v-model='sectoroption'>
                <option v-for='sector in sectors' :key="sector.id"  :value="sector" > {{ sector | capitalize }}</option>
            </b-select>
        </b-field>
        <b-table
            :data="data"
            :paginated='isPaginated'
            per-page="15"
            :opened-detailed="defaultOpenedDetails"
            detailed
            :bordered="isBordered"
            :striped="isStriped"
            :narrowed="isNarrowed"
            :hoverable="isHoverable"
            :mobile-cards="hasMobileCards"
            :loading="isLoading"
            detail-key="id"
            :selected.sync="selected"
            @details-open="(row, index) => $toast.open(`Expanded ${row.product_name}`)"
            >
            <template slot-scope="props">
                <b-table-column field="product_name" label="Product Name" sortable>
                    {{ props.row.product_name | capitalize }}
                </b-table-column>
                <b-table-column field="category" label="Category" sortable>
                    {{ props.row.category | capitalize }}
                </b-table-column>

                <b-table-column field="date" label="Published Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.published_date).toLocaleDateString() }}
                    </span>
                </b-table-column>
                <b-table-column label="Public Sector" field="industry_sector" sortable>
                    {{ props.row.industry_sector }}
                </b-table-column>
                <b-table-column field="licence" label="Product Licence" sortable>
                    {{ props.row.licence | capitalize }}
                </b-table-column>
                <b-table-column field="product_type" label="Product Type" sortable>
                    {{ props.row.product_type | capitalize }}
                </b-table-column>
                            <b-table-column field="product_link" label="Product Link">
                    <a :href="props.row.product_link" target='_blank' rel='noopener'>{{ props.row.product_link }}</a>
                </b-table-column>
            </template>
            <template slot="detail" slot-scope="props">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>{{ props.row.product_name }} </strong>
                                <small>31m</small>
                                <br>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                                Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                            </p>
                        </div>
                    </div>
                </article>
            </template>
        </b-table>

    </div>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    const data = [];
    return {
      data: (this.data = this.$store.getters.allProducts),
      defaultOpenedDetails: [0],
      isPaginated: true,
      isLoading: true,
      isBordered: false,
      isStriped: true,
      isNarrowed: true,
      isHoverable: true,
      hasMobileCards: true,
      selected: data[0],

      categories: this.$store.getters.categories,
      licences: this.$store.getters.licences,
      sectors: this.$store.getters.sectors,

      selectedoptioin: this.$store.getters.categories[0],
      licenceoption: this.$store.getters.licences[0],
      sectoroption: this.$store.getters.sectors[0]
    };
  },
  mounted() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 350);
    console.log(this.licenceoption);
  }
};
</script>

<style lang="scss">
.media-content {
  width: 100%;
}
</style>
