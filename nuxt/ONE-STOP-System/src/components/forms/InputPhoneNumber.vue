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

<script>
export default {
  data: () => ({
    phoneNumber: null,
  }),

  methods: {
    setPhoneNumber(phoneNumber) {
      this.phoneNumber = phoneNumber
      this.$emit('setPhoneNumber', phoneNumber)
    },
  },
}
</script>
