<template>
  <div v-for="joke in jokes" class="joke" :class="{ 'joke--favourite': joke.favourite }">
    <span class="joke__preview" :style="{ color: stringToColor(joke.category) }">
      <span v-if="joke.type == 'single'">{{ getFirst(joke.joke) }}</span>
      <span v-if="joke.type == 'twopart'">{{ getFirst(joke.setup) }}</span>
    </span>
    <modal-element :class="{ 'popup--favorite': joke.favourite }">
      <component :is="componentId(joke)" :joke="joke" class="margin-bottom" />
      <div class="toolstrip flex--right toolstrip--no-margin">
        <button class="btn btn--sec small" @click="joke.favourite = !joke.favourite">
          {{ joke.favourite ? 'Remove from favourites' : 'Make it favourite!' }}
        </button>
      </div>
    </modal-element>
  </div>
</template>

<script lang="ts" setup>
import SingleJoke from '~~/components/SingleJoke.vue';
import TwoPartJoke from '~~/components/TwoPartJoke.vue';

const props = defineProps({
  jokes: {
    type: Array as PropType<Array<SingleJoke | TwoPartJoke>>,
    required: true
  }
})

const componentId = (joke: SingleJoke | TwoPartJoke) => {
  return joke.type === 'single' ? SingleJoke : TwoPartJoke
}
</script>

<style lang="scss">
.joke {
  padding: .5em;
  display: flex;
  border-bottom: 1px solid #0000002c;

  &__preview {
    margin-right: auto;
  }

  &--favourite {
    background: url("/stars.svg") #fffdf2;
  }
}

.popup--favorite .popup__body {
  background: url("/stars.svg") #fffdf2;
}
</style>