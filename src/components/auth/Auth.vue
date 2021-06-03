<template>
  <div class="container">
    <div @keypress.enter="logIn(form)" class="form">
      <div class="form__header">
        <img class="form__icon" src="../../assets/dish.svg" alt="dish">
        <h2 class="brand">{{title}}</h2>
        <h4 class="text-sm">{{description}}</h4>
      </div>
      <div class="form__body">
        <slot></slot>
      </div>            
    </div>
  </div>
</template>

<script>
export default {
    props: ['title', 'description']

}
</script>

<style scoped>
.brand {
  @apply text-3xl font-extrabold tracking-wide
}
.form {
  @apply flex flex-col bg-white pt-8 px-10 rounded-lg w-full md:h-2/3 sm:h-full shadow
}

.form__icon {
  @apply w-16 pb-5 
}

.form__body {
  @apply mt-3
}

.container {
    @apply flex flex-col justify-center items-center mx-auto rounded-lg self-center gap-5 h-full sm:w-full md:w-1/5
}
</style>