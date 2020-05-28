<template>
  <div>
    <v-col cols="2">
      <v-subheader>地区</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-autocomplete
        :items="regions"
        label="地区を選択"
        :value="regionsValue"
        @input="setRegionsValue"
      ></v-autocomplete>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputRegion extends Vue {
  regionsValue: number = null

  @Prop({ default: [] })
  regions!: array

  @Emit('setRegionsValue')
  setRegionsValue(regionsValue: number): number {
    this.regionsValue = regionsValue
    return regionsValue
  }
}
</script>
