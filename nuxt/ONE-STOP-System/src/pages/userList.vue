<template>
  <v-app>
    <v-container>
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-0"></v-breadcrumbs>
      </v-row>
      <heading-level-2 heading-text="利用者一覧"></heading-level-2>
    </v-container>
    <v-container>
      <filter-user-list
        :regions="regions"
        @set-filtered-user-list="setFilteredUserList"
      ></filter-user-list>
      <list-users
        :body="userList"
        @open-edit-dialog="openEditDialog"
        @open-delete-dialog="openDeleteDialog"
      ></list-users>
    </v-container>
    <dialog-edit-user
      ref="dialogEditUser"
      :regions="regions"
      :capacities="capacities"
      @save-user-setting="saveUserSetting"
    >
    </dialog-edit-user>
    <dialog-delete-user ref="dialogDeleteUser" @delete-user="deleteUser">
    </dialog-delete-user>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator'
import HeadingLevel2 from '~/components/headings/HeadingLevel2.vue'
import FilterUserList from '~/components/filters/FilterUserList.vue'
import ListUsers from '~/components/lists/ListUsers.vue'
import DialogEditUser from '~/components/dialogs/DialogEditUser.vue'
import DialogDeleteUser from '~/components/dialogs/DialogDeleteUser.vue'

interface Region {
  value: number | null
  text: string
}

interface Capacity {
  value: number | null
  text: string
}

interface IsSubscriptionMember {
  value: number | null
  text: string
}

interface User {
  id: number | null
  yukinkoNumber: number | null
  name: string
  phoneNumber: number | null
  region: number | null
  sensorId: number | null
  capacity: number | null
  isSubscriptionMember: boolean
}

@Component({
  components: {
    HeadingLevel2,
    FilterUserList,
    ListUsers,
    DialogEditUser,
    DialogDeleteUser,
  },
})
export default class UserList extends Vue {
  @Ref() dialogEditUser!: DialogEditUser
  @Ref() dialogDeleteUser!: DialogDeleteUser

  breadCrumbs = [
    {
      text: '利用者一覧',
      disabled: true,
      href: './userList',
    },
  ]

  regions = [
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
  ]

  capacities = [
    {
      value: 1,
      text: '200L',
    },
    {
      value: 2,
      text: '400L',
    },
  ]

  isSubscriptionMember = [
    {
      value: true,
      text: '有',
    },
    {
      value: false,
      text: '無',
    },
  ]

  userList: User[] = [
    {
      id: 1,
      yukinkoNumber: 11111,
      name: '田中太郎',
      phoneNumber: 11111111111,
      region: 1,
      sensorId: 11111,
      capacity: 1,
      isSubscriptionMember: true,
    },
    {
      id: 2,
      yukinkoNumber: 22222,
      name: '田中二郎',
      phoneNumber: 22222222222,
      region: 2,
      sensorId: 22222,
      capacity: 2,
      isSubscriptionMember: false,
    },
    {
      id: 3,
      yukinkoNumber: 33333,
      name: '田中三郎',
      phoneNumber: 33333333333,
      region: 3,
      sensorId: 33333,
      capacity: 1,
      isSubscriptionMember: true,
    },
  ]

  filterUserList: object = {}

  deleteDialog: boolean = false

  userSelected: User | undefined = {
    id: null,
    yukinkoNumber: null,
    name: '',
    phoneNumber: null,
    region: null,
    sensorId: null,
    capacity: null,
    isSubscriptionMember: true,
  }

  openEditDialog(id: number): void {
    this.userSelected = this.userList.find(user => user.id === id)
    if (this.userSelected !== undefined) {
      this.dialogEditUser.setUser(this.userSelected)
      this.dialogEditUser.openEditDialog()
    }
  }

  openDeleteDialog(id: number): void {
    this.userSelected = this.userList.find(user => user.id === id)
    if (this.userSelected !== undefined) {
      this.dialogDeleteUser.setUser(this.userSelected)
      this.dialogDeleteUser.openDeleteDialog()
    }
  }

  closeDeleteDialog() {
    this.deleteDialog = false
  }

  setFilteredUserList(filterUserList: object): void {
    console.log({ filterUserList })
    // userListを絞り込む処理を書く
  }

  saveUserSetting(userSetting: object): void {
    console.log(userSetting)
  }

  deleteUser(userId: number): void {
    console.log(userId)
  }
}
</script>
