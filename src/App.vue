<template>
    <!-- <div id="app"> -->
        <router-view />
    <!-- </div> -->
</template>

<script>
export default {
    name: "App",
    components: {},
};
</script>

<style lang="scss">
@import "@/style/public.scss";

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    zoom: 80%;
    background-color: lightslategray;
}
html {
   box-sizing: border-box;
    margin: 0;
    
}
body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    zoom: 80%;
    margin: 0;
    background-color: lightslategray;
}
p {
    margin: 0;
    padding: 0;
}
</style>
