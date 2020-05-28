<template>
  <v-col>
    <h2>{{ headingText }}</h2>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class HeadingLevel2 extends Vue {
  @Prop({ default: '' })
  headingText!: string
}
</script>
