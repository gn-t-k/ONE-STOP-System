<template>
  <v-app>
    <v-container>
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-0"></v-breadcrumbs>
      </v-row>
      <v-row class="mb-8">
        <h2>利用者一覧</h2>
      </v-row>
    </v-container>
    <v-container>
      <v-col cols="12">
        <v-row>
          <v-col cols="3">
            <v-text-field label="雪んこNo.を入力"> </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field label="氏名を入力"> </v-text-field>
          </v-col>
          <v-col cols="3">
            <v-autocomplete :items="regions" label="地区を選択">
            </v-autocomplete>
          </v-col>
          <v-col cols="3" class="d-flex justify-end align-center">
            <v-btn dark color="primary">絞り込み</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="userList"
          hide-default-footer
          class="elevation-1"
        >
          <template v-slot:item.edit>
            <v-icon @click="openEditModal">
              mdi-pencil
            </v-icon>
          </template>
          <template v-slot:item.delete>
            <v-icon @click="openDeleteModal">
              mdi-delete
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-container>
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">利用者詳細を編集</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="5">
                <v-subheader>雪ん子No.</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-text-field label="ナンバー入力" value="1111"> </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>氏名</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-text-field label="テキストを入力" value="田中太郎">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>電話番号</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-text-field label="ナンバー入力" value="111-1111-1111">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>地区</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-autocomplete :items="regions" label="地区を選択">
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>センサID</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-text-field label="ナンバー入力" value="11111">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>タンクの容量</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-autocomplete :items="capacity" label="タンクの容量を選択">
                </v-autocomplete>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="5">
                <v-subheader>定期配送</v-subheader>
              </v-col>
              <v-col cols="7">
                <v-switch v-model="toggle"></v-switch>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-end">
                <v-btn class="mr-4" @click="closeEditModal">キャンセル</v-btn>
                <v-btn color="primary" @click="closeEditModal">保存</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">確認</v-card-title>
        <v-card-text
          >田中太郎さん（雪んこNo.：11111）のデータを削除しますか？</v-card-text
        >
        <v-card-text>（この操作は取り消すことができません）</v-card-text>
        <v-card-actions>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn class="mr-4" @click="closeDeleteModal">キャンセル</v-btn>
              <v-btn color="warning" @click="closeDeleteModal">削除</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
        text: '利用者一覧',
        disabled: true,
        href: './userList',
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
      {
        value: 1,
        text: '200L',
      },
      {
        value: 2,
        text: '400L',
      },
    ],
    headers: [
      { text: '編集', value: 'edit' },
      { text: '雪んこNo.', value: 'yukinkoNumber' },
      { text: '氏名', value: 'name' },
      { text: '電話番号', value: 'phoneNumber' },
      { text: '地区', value: 'regions' },
      { text: 'センサID', value: 'sensorId' },
      { text: 'タンクの容量', value: 'capacity' },
      { text: '定期配送', value: 'isSubscriptionMember' },
      { text: '削除', value: 'delete' },
    ],
    userList: [
      {
        yukinkoNumber: 11111,
        name: '田中太郎',
        phoneNumber: '111-1111-1111',
        regions: '秋田',
        sensorId: 11111,
        capacity: 200,
        isSubscriptionMember: '有',
      },
      {
        yukinkoNumber: 22222,
        name: '田中二郎',
        phoneNumber: '222-2222-2222',
        regions: '大舘',
        sensorId: 22222,
        capacity: 200,
        isSubscriptionMember: '無',
      },
      {
        yukinkoNumber: 33333,
        name: '田中三郎',
        phoneNumber: '333-3333-3333',
        regions: '能代',
        sensorId: 33333,
        capacity: 200,
        isSubscriptionMember: '有',
      },
    ],
    editDialog: false,
    deleteDialog: false,
    toggle: true,
  }),

  methods: {
    link(path) {
      window.location.href = path
    },

    openEditModal() {
      this.editDialog = true
    },

    closeEditModal() {
      this.editDialog = false
    },

    openDeleteModal() {
      this.deleteDialog = true
    },

    closeDeleteModal() {
      this.deleteDialog = false
    },
  },
}
</script>
