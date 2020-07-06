<template>
  <div>
    <v-col cols="2">
      <v-subheader>センサID</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="ナンバー入力"
        :value="sensorID"
        @input="setSensorID"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputSensorID extends Vue {
  sensorID: number | null = null

  @Emit('setSensorID')
  setSensorID(sensorID: number): number {
    this.sensorID = sensorID
    return sensorID
  }
}
</script>
