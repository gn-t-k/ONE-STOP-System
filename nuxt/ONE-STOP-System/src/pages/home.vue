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
            <v-btn dark>印刷</v-btn>
          </div>
          <div class="d-flex justify-end align-center">
            <v-subheader>見守りサービス</v-subheader>
            <v-switch v-model="toggle" class="mr-4"></v-switch>
            <v-btn dark color="primary">絞り込み</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="alerts"
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
            <v-btn dark>印刷</v-btn>
          </div>
          <div class="d-flex justify-end align-center">
            <v-autocomplete
              :items="regions"
              label="地区"
              class="mr-8"
              hide-details
            >
            </v-autocomplete>
            <v-btn dark color="primary">絞り込み</v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="10">
          <v-data-table
            :headers="headers"
            :items="alerts"
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
    navigationItems: {
      home: {
        text: 'ホーム',
        href: './index.html',
      },
      userList: {
        text: '利用者一覧',
        href: './userList.html',
      },
      userRegisteration: {
        text: '利用者登録',
        href: './userRegisteration.html',
      },
    },
    menuItems: {
      logout: {
        title: 'ログアウト',
        href: './login.html',
      },
    },
    breadCrumbs: [
      {
        text: 'ホーム',
        disabled: true,
        href: './',
      },
    ],
    headers: [
      { text: '日付', value: 'date' },
      { text: '雪んこNo.', value: 'yukinkoNumber' },
      { text: '氏名', value: 'name' },
      { text: '内容', value: 'content' },
    ],
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
      {
        date: '2020年7月1日',
        yukinkoNumber: 33333,
        name: '田中三郎',
        content: '見守りサービス（3日残量に変化なし）',
      },
      {
        date: '2020年7月1日',
        yukinkoNumber: 44444,
        name: '田中四郎',
        content: '見守りサービス（3日残量に変化なし）',
      },
    ],
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
