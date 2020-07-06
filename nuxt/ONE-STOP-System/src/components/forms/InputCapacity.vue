<template>
  <div>
    <v-col cols="2">
      <v-subheader>タンクの容量</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-autocomplete
        :items="capacity"
        label="タンクの容量を選択"
        :value="capacityValue"
        @input="setCapacityValue"
      >
      </v-autocomplete>
    </v-col>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class InputCapacity extends Vue {
  capacityValue: number | null = null

  @Emit('setCapacityValue')
  setCapacityValue(capacityValue: number): number {
    this.capacityValue = capacityValue
    return capacityValue
  }
}
</script>
