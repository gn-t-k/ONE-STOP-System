<template>
  <div>
    <v-col cols="2">
      <v-subheader>電話番号</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="ナンバー入力"
        :value="phoneNumber"
        @input="setPhoneNumber"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputNumber extends Vue {
  phoneNumber: number | null = null

  @Emit('setPhoneNumber')
  setPhoneNumber(phoneNumber: number): number {
    this.phoneNumber = phoneNumber
    return phoneNumber
  }
}
</script>
