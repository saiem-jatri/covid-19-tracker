<template>
  <AppHeader />
  <div>
    <Home/>
  </div>
</template>

<script>

import Home from "./views/Home.vue";
import AppHeader from "./components/AppHeader.vue";
export default {

components:{
  AppHeader,Home
}

};
</script>