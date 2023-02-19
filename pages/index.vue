<template>
  <div class="container center-width grid">
    <div class="col col--md-8">
      <h1 class="margin-bottom">Jokster Central</h1>
      <main v-if="filteredJokes">
        <joke-list :jokes="filteredJokes" />
        <button class="btn margin-top" type="button" @click="refreshJokes" :disabled="pending">Refresh</button>
      </main>
      <div v-if="pending">Sending sides to the orbit, please wait...</div>
      <div v-if="error || jokesResponse?.error">Sides reached escape velocity, please try again later.</div>
    </div>

    <div class="col col--md-4 card control-box">
      <fieldset class="card__body">
        <legend>Choose joke types</legend>
        <label class="checkbox">
          <input type="checkbox" class="checkbox__input" id="twopart" value="twopart" v-model="activeJokeTypes">
          <div class="checkbox__label">Two-part jokes</div>
        </label>
        <label>
          <input type="checkbox" class="checkbox__input" id="single" value="single" v-model="activeJokeTypes">
          <div class="checkbox__label">Single Jokes</div>
        </label>
        <div class="gray-text margin-top">
          <p>All jokes: {{ jokesResponse?.jokes.length }}</p>
          <p>Visible jokes: {{ filteredJokes?.length }}</p>
        </div>
      </fieldset>
    </div>

  </div>
</template>

<script lang="ts" setup>

const { data: jokesResponse, refresh, pending, error } = await useFetch<JokeApiData>(`https://v2.jokeapi.dev/joke/Programming,Pun,Misc,Spooky?safe-mode&amount=10`)
const activeJokeTypes = ref(["twopart", "single"])

async function refreshJokes() {
  const favouriteJokes = jokesResponse.value?.jokes.filter(joke => joke.favourite) || []
  await refresh()

  if (!jokesResponse.value?.jokes) return
  jokesResponse.value.jokes = [...favouriteJokes, ...jokesResponse.value.jokes]
}

const filteredJokes = computed(() => {
  return jokesResponse.value?.jokes.filter(joke => activeJokeTypes.value.some(activeJokeType => activeJokeType === joke.type))
})

</script>


<style lang="scss"></style>