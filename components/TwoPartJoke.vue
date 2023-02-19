<template>
  <div>
    <div class="twopart--setup">{{ joke.setup }}</div>
    <div>
      <button class="a" @click="deliveryShown = true" v-if="!deliveryShown">Show it all!</button>
      <div class="twopart--delivery" v-if="deliveryShown">{{ joke.delivery }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  joke: {
    type: Object as PropType<TwoPartJoke>,
    required: true
  }
})

const deliveryShown = ref(false)
</script>


<style lang="scss"></style>