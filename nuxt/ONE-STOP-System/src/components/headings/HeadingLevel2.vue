<template>
  <v-col>
    <h2>{{ headingText }}</h2>
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
