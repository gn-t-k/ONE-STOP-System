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

<script>
export default {
  data: () => ({
    capacityValue: null,
  }),

  methods: {
    setCapacityValue(capacityValue) {
      this.capacityValue = capacityValue
      this.$emit('setCapacityValue', capacityValue)
    },
  },
}
</script>
