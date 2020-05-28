<template>
  <div>
    <v-col cols="2">
      <v-subheader>雪ん子No.</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="ナンバー入力"
        :value="yukinkoNumber"
        @input="setYukinkoNumber"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputYukinkoNumber extends Vue {
  yukinkoNumber: number = null

  @Emit('setYukinkoNumber')
  setYukinkoNumber(yukinkoNumber: number): number {
    this.yukinkoNumber = yukinkoNumber
    return yukinkoNumber
  }
}
</script>
