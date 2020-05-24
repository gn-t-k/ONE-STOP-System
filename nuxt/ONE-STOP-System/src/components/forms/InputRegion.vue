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

<script>
export default {
  props: {
    regions: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  data: () => ({
    regionsValue: null,
  }),

  methods: {
    setRegionsValue(regionsValue) {
      this.regionsValue = regionsValue
      this.$emit('setRegionsValue', regionsValue)
    },
  },
}
</script>
