<template>
  <v-dialog v-model="deleteDialog" max-width="500px">
    <v-card>
      <v-card-title class="headline">確認</v-card-title>
      <v-card-text
        >{{ name }}さん（雪んこNo.：{{
          yukinkoNumber
        }}）のデータを削除しますか？</v-card-text
      >
      <v-card-text>（この操作は取り消すことができません）</v-card-text>
      <v-card-actions>
        <v-row>
          <v-col class="d-flex justify-end">
            <v-btn class="mr-4" @click="closeDeleteDialog">キャンセル</v-btn>
            <v-btn color="warning" @click="deleteUser">削除</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

interface Region {
  value: number | null
  text: string
}

interface Capacity {
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

@Component
export default class DialogDeleteUser extends Vue {
  deleteDialog = false
  userId: number | null = null
  yukinkoNumber: number | null = null
  name: string = ''

  setUser(user: User): void {
    this.userId = user.id
    this.yukinkoNumber = user.yukinkoNumber
    this.name = user.name
  }

  openDeleteDialog(): void {
    this.deleteDialog = true
  }

  closeDeleteDialog(): void {
    this.deleteDialog = false
  }

  @Emit('delete-user')
  deleteUser(): number | null {
    this.closeDeleteDialog()
    return this.userId
  }
}
</script>
