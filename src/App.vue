<template>
    <v-app>
      <HeaderComponent></HeaderComponent>
      <v-main >
        <v-container>
          <ProgressLinear></ProgressLinear>
          <router-view/>
        </v-container>
      </v-main>
    </v-app>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import ProgressLinear from "@/components/ProgressLinear";

export default {
    components: {
      HeaderComponent,
      ProgressLinear,
    }
}
</script>


<style lang="scss">

html {
  overflow: auto !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
main {
  margin-top: 64px;
}

</style>
