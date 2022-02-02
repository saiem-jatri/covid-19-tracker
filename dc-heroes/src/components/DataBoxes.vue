<template>
  <div class="grid md:grid-cols-2 gap-4">
    <!-- Box 1 -->
    <div class="shadow-md bg-blue-100 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New: {{stat.NewConfirmed}}</span>

      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total: {{stat.TotalConfirmed}}</span>
      </div>
    </div>

    <!-- Box 2 -->
    <div class="shadow-md bg-blue-200 p-10 text-center rounded">
      <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

      <div class="text-2xl mb-4">
        <span class="font-bold">New: {{stat.NewDeaths}}</span>

      </div>
      <div class="text-2xl mb-4">
        <span class="font-bold">Total:{{stat.TotalDeaths}}</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DataBoxes",
  props: {
    'stat':Object

  },

  mounted() {
    console.log(this.props)
  }
}
</script>

<style scoped>

</style>