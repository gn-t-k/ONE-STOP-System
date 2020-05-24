<template>
  <div>
    <v-col cols="2">
      <v-subheader>氏名</v-subheader>
    </v-col>
    <v-col cols="6">
      <v-text-field
        label="テキストを入力"
        value="name"
        @input="setName"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
  }),

  methods: {
    setName(name) {
      this.name = name
      this.$emit('setName', name)
    },
  },
}
</script>
