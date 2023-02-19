<template>
  <span>
    <button class="a joke__open-btn" @click="openPopup">Show more</button>
    <div class="popup popup--joke" :class="{ 'popup--visible': popupVisible }" @click.self="closePopup">
      <div class="popup__body">
        <button @click="closePopup" class="close-btn">🗙</button>
        <div class="popup__content">
          <slot />
        </div>
      </div>
    </div>
  </span>
</template>

<script lang="ts" setup>
const popupVisible = ref(false)
function openPopup() {
  popupVisible.value = true
}
function closePopup() {
  popupVisible.value = false
}
</script>


<style lang="scss">
.popup--joke {
  .popup__body {
    width: 30rem;
    max-width: calc(100% - 2*$gap);
  }
}

.close-btn {
  position: absolute;
  top: -.1em;
  right: .1em;
  color: $secondary;
}
</style>