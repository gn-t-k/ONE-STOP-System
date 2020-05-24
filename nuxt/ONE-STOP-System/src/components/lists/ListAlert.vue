<template>
  <v-col cols="12">
    <v-data-table
      :headers="headers"
      :items="body"
      hide-default-footer
      class="elevation-1"
    >
    </v-data-table>
  </v-col>
</template>

<script>
export default {
  props: {
    body: {
      type: Array,
      default: () => [],
      required: true,
    },
  },

  data: () => ({
    headers: [
      { text: '日付', value: 'date' },
      { text: '雪んこNo.', value: 'yukinkoNumber' },
      { text: '氏名', value: 'name' },
      { text: '内容', value: 'content' },
    ],
  }),
}
</script>
