<template>
  <v-col class="d-flex align-center justify-start">
    <h3>{{ headingText }}</h3>
  </v-col>
</template>

<script>
export default {
  props: {
    headingText: {
      type: String,
      default: '',
      required: true,
    },
  },
}
</script>
