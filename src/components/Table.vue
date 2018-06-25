<template>
    <div class="table-container has-text-left">
        <b-field label="Categories">
            <b-select v-model='selectedoptioin'>
                <option v-for='category in categories' :key="category.id" :value="category"> {{ category | capitalize }}</option>
            </b-select>
        </b-field>
        <b-field label="Type of licence">
            <b-select v-model='licenceoption'>
                <option v-for='licence in licences' :key="licence.id" :value="licence"> {{ licence | capitalize }}</option>
            </b-select>
        </b-field>
        <b-field label="Public Sectors">
            <b-select v-model='sectoroption'>
                <option v-for='sector in sectors' :key="sector.id" :value="sector"> {{ sector | capitalize }}</option>
            </b-select>
        </b-field>
        <b-field label="Countries">
            <b-select v-model='countryoption'>
                <option v-for='country in countries' :key="country.id" :value="country"> {{ country | capitalize }}</option>
            </b-select>
        </b-field>
        <b-field label="Companies">
            <b-select v-model='companyoption'>
                <option v-for='company in companies' :key="company.id" :value="company"> {{ company | capitalize }}</option>
            </b-select>
        </b-field>
        <b-table :data="data" :paginated='isPaginated' per-page="15" :opened-detailed="defaultOpenedDetails" detailed :bordered="isBordered" :striped="isStriped" :narrowed="isNarrowed" :hoverable="isHoverable" :mobile-cards="hasMobileCards" :loading="isLoading" detail-key="id" :selected.sync="selected " @details-open="(row, index) => $toast.open(`Expanded ${row.product_name}`)">
            <template slot-scope="props">
                <b-table-column field="product_name" label="Product Name">
                    {{ props.row.product_name | capitalize }}
                </b-table-column>
                <b-table-column field="category" label="Category">
                    {{ props.row.category | capitalize }}
                </b-table-column>

                <b-table-column field="date" label="Published Date" centered>
                    <span class="tag is-success">
                        {{ new Date(props.row.published_date).toLocaleDateString() }}
                    </span>
                </b-table-column>
                <b-table-column label="Public Sector" field="industry_sector">
                    {{ props.row.industry_sector | capitalize }}
                </b-table-column>
                <b-table-column field="licence" label="Product Licence">
                    {{ props.row.licence | capitalize }}
                </b-table-column>
                <b-table-column field="product_type" label="Product Type">
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
                                <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
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
          data: [],
          defaultOpenedDetails: [],
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
          countries: this.$store.getters.countries,
          companies: this.$store.getters.companies,

          selectedoptioin: "",
          licenceoption: "",
          sectoroption: "",
          countryoption: "",
          companyoption: ""
        };
      },
      mounted() {
        this.isLoading = true;
        setTimeout(() => {
          this.data = this.$store.getters.allProducts;
          this.selectedoptioin = this.$store.getters.categories[0];
          this.licenceoption = this.$store.getters.licences[0];
          this.sectoroption = this.$store.getters.sectors[0];
          this.countryoption = this.$store.getters.countries[0];
          this.companyoption = this.$store.getters.companies[0];
          this.isLoading = false;
        }, 350);
      },
      methods: {
        updateCat(key) {
          this.$store.commit("updateCat", key);
        },
        updateProd(prod) {
          this.$store.commit("updateProd", prod);
        },
        updateLicence(licence) {
          this.$store.commit("updateLicence", licence);
        },
        updateSector(sector) {
          this.$store.commit("updateSector", sector);
        },
        updateCountry(country) {
          this.$store.commit("updateCountry", country);
        },
        updateCompany(company) {
          this.$store.commit("updateCompany", company);
        }
      }
    };
</script>

<style lang="scss" >
    .media-content {
      width: 100%;
    }

    .field {
      display: inline-block;
      margin-right: 1rem;
    }
</style>
