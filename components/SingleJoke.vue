<template>
  <div>
    {{ joke.joke }}
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  joke: {
    type: Object as PropType<SingleJoke>,
    required: true
  }
})
</script>