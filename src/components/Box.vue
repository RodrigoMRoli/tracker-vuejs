<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Box',
    data() {
        return {
            estilos: {
                backgroundColor: '#FAF0CA' // quando se passa estilos dessa forma você pode utilizar camelCase que o vue entende que tem um - ali
            }
        }
    }
})
</script>