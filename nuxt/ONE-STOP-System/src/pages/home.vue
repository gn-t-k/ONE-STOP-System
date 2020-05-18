<template>
  <v-app>
    <v-container>
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-0"></v-breadcrumbs>
      </v-row>
      <v-row class="mb-8">
        <h2>ホーム</h2>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <v-col class="d-flex justify-space-between align-center" cols="10">
          <div class="d-flex justify-start align-center">
            <h3 class="mr-8">アラート：最終更新2020年7月1日（16:00）</h3>
            <v-btn color="primary">印刷</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-data-table
            :headers="headers.alerts"
            :items="body.alerts"
            hide-default-footer
            class="elevation-1"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <v-col class="d-flex justify-space-between align-center" cols="10">
          <div class="d-flex justify-start align-center">
            <h3 class="mr-8">給油指示情報：最終更新2020年7月1日（16:00）</h3>
            <v-btn color="primary">印刷</v-btn>
          </div>
          <div class="d-flex justify-end align-center">
            <v-subheader>定期配送</v-subheader>
            <v-switch v-model="toggle" class="mr-4"></v-switch>
            <v-autocomplete
              :items="regions"
              label="地区"
              hide-details
              class="align-center"
            >
            </v-autocomplete>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-data-table
            :headers="headers.refuleOrders"
            :items="body.refuleOrders"
            hide-default-footer
            class="elevation-1"
          >
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    breadCrumbs: [
      {
        text: 'ホーム',
        disabled: true,
        href: './',
      },
    ],
    headers: {
      alerts: [
        { text: '日付', value: 'date' },
        { text: '雪んこNo.', value: 'yukinkoNumber' },
        { text: '氏名', value: 'name' },
        { text: '内容', value: 'content' },
      ],
      refuleOrders: [
        { text: '日付', value: 'date' },
        { text: '雪んこNo.', value: 'yukinkoNumber' },
        { text: '氏名', value: 'name' },
        { text: '地区', value: 'region' },
        { text: 'タンクの容量', value: 'capacity' },
        { text: '定期配送', value: 'isSubscriptionMember' },
      ],
    },
    body: {
      alerts: [
        {
          date: '2020年7月1日',
          yukinkoNumber: 11111,
          name: '田中一郎',
          content: '情報未取得',
        },
        {
          date: '2020年7月1日',
          yukinkoNumber: 22222,
          name: '田中二郎',
          content: '情報未取得',
        },
      ],
      refuleOrders: [
        {
          date: '2020年7月1日',
          yukinkoNumber: 11111,
          name: '田中一郎',
          region: '地区1',
          capacity: 200,
          isSubscriptionMember: '有',
        },
        {
          date: '2020年7月1日',
          yukinkoNumber: 22222,
          name: '田中次郎',
          region: '地区2',
          capacity: 400,
          isSubscriptionMember: '無',
        },
      ],
    },

    regions: [
      {
        value: 1,
        text: '地区1',
      },
      {
        value: 2,
        text: '地区2',
      },
      {
        value: 3,
        text: '地区3',
      },
    ],
    toggle: false,
  }),

  methods: {
    link(path) {
      window.location.href = path
    },
  },
}
</script>
