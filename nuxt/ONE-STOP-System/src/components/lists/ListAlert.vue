<template>
  <v-col cols="12">
    <v-data-table
      :headers="headers"
      :items="body"
      hide-default-footer
      class="elevation-1"
    >
    </v-data-table>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component
export default class ListAlert extends Vue {
  headers: array = [
    { text: '日付', value: 'date' },
    { text: '雪んこNo.', value: 'yukinkoNumber' },
    { text: '氏名', value: 'name' },
    { text: '内容', value: 'content' },
  ]

  @Prop({ default: [] })
  body!: array
}
</script>
