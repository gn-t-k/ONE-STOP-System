<template>
  <v-col class="d-flex align-center justify-start">
    <h3>{{ headingText }}</h3>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class HeadingLevel3 extends Vue {
  @Prop({ default: '' })
  headingText!: string
}
</script>
