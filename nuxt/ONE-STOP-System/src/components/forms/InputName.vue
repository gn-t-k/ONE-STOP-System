<template>
  <div>
    <v-col cols="2">
      <v-subheader>氏名</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="テキストを入力"
        value="name"
        @input="setName"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputName extends Vue {
  name: string = ''

  @Emit('setName')
  setName(name: string): string {
    this.name = name
    return name
  }
}
</script>
