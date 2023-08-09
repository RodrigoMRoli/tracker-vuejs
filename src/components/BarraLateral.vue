<template>
    <header>
        <h1>
            <img src="../assets/vue.svg" alt="logo">
        </h1>
    </header>
</template>

<script lang="ts"> /** tag setup? vai explicar? */
import { defineComponent } from 'vue';

export default defineComponent({
    name:'BarraLateral'
})
</script>

<style scoped>

header {
    padding: 1rem;
    background: #0d3b66;
    width: 100%;
    height: 100vh;
}
@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        width: auto;
    }
}
</style>