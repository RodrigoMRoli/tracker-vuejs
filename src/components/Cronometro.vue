<template>
    <section>
        <strong>{{ tempoDecorrido }}</strong>
    </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Cronometro',
    props: { // prop = propriedade
        tempoEmSegundos: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tempoDecorrido(): string {
            // '00:00:00'
            return new Date(this.tempoEmSegundos * 1000).toISOString().slice(11,-5)
        }
    },
})

</script>