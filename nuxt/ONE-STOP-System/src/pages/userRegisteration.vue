<template>
  <v-app>
    <v-container>
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-0"></v-breadcrumbs>
      </v-row>
      <v-row class="mb-8">
        <h2>利用者登録</h2>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <v-col cols="2">
          <v-subheader>雪ん子No.</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field label="ナンバー入力"> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>氏名</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field label="テキストを入力"> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>電話番号</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field label="ナンバー入力"> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>地区</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-autocomplete :items="regions" label="地区を選択"> </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>センサID</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field label="ナンバー入力"> </v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>タンクの容量</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-autocomplete :items="capacity" label="タンクの容量を選択">
          </v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>定期配送</v-subheader>
        </v-col>
        <v-col>
          <v-switch v-model="toggle"></v-switch>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="d-flex justify-end">
          <v-btn dark color="primary">登録</v-btn>
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
        text: '利用者登録',
        disabled: true,
        href: './userRegisteration',
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
    capacity: [
      { value: 1, text: '200L' },
      { value: 2, text: '400L' },
    ],
    toggle: true,
  }),

  methods: {
    link(path) {
      window.location.href = path
    },
  },
}
</script>
