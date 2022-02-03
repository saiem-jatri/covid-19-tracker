<template>
<main v-if="!loading">
<DataTitle :text="title" :dataDate="dataDate"/>
  <DataBoxes :stat="stats" />
  <CountrySelect @get-country="getCountryData" :countries="countries"/>
</main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
  <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
  </div>
    <img src="../assets/hourglass.gif" alt="#" class="w-24 m-auto">
  </main>
</template>

<script>
import DataTitle from '../components/DataTitle.vue'
import DataBoxes from '../components/DataBoxes.vue'
import CountrySelect from '../components/CountrySelect.vue'
export default {
  name: "home",
  components:{DataTitle,
              DataBoxes,CountrySelect
  },
  methods:{
   async fetchCovidData(){
     // this.loading = true
     const res = await fetch('https://api.covid19api.com/summary')
     const data= await res.json();
     if(data) {
       this.loading = false;
       this.dataDate=data.Date
       this.stats=data.Global
       this.countries=data.Countries
     }
     return data
    },
    getCountryData(country){
     this.stats=country
      this.title=country.Country
    }
  },
  data(){
    return{
      loading: true,
      title:'Global',
      dataDate:'',
      stats:{},
      countries:{},
    }
  },
  created(){
    this.fetchCovidData()

  },
}
</script>

<style scoped>

</style>