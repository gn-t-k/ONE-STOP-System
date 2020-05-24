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
      { text: '地区', value: 'region' },
      { text: 'タンクの容量', value: 'capacity' },
      { text: '定期配送', value: 'isSubscriptionMember' },
    ],
  }),
}
</script>
