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

<script>
export default {
  data: () => ({
    sensorID: null,
  }),

  methods: {
    setSensorID(sensorID) {
      this.sensorID = sensorID
      this.$emit('setSensorID', sensorID)
    },
  },
}
</script>
