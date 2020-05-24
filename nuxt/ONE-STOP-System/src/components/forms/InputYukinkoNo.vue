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

<script>
export default {
  data: () => ({
    yukinkoNumber: null,
  }),

  methods: {
    setYukinkoNumber(yukinkoNumber) {
      this.yukinkoNumber = yukinkoNumber
      this.$emit('setYukinkoNumber', yukinkoNumber)
    },
  },
}
</script>
