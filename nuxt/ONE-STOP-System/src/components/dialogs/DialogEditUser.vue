<template>
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
              <v-text-field
                label="ナンバー入力"
                :value="yukinkoNumber"
                @input="setYukinkoNumber"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>氏名</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-text-field
                label="テキストを入力"
                :value="name"
                @input="setName"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>電話番号</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-text-field
                label="ナンバー入力"
                :value="phoneNumber"
                @input="setPhoneNumber"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>地区</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-autocomplete
                :items="regions"
                :value="region"
                label="地区を選択"
                @input="setRegion"
              >
              </v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>センサID</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-text-field
                label="ナンバー入力"
                :value="sensorId"
                @input="setSensorId"
              >
              </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>タンクの容量</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-autocomplete
                :items="capacities"
                :value="capacity"
                label="タンクの容量を選択"
                @input="setCapacity"
              >
              </v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="5">
              <v-subheader>定期配送</v-subheader>
            </v-col>
            <v-col cols="7">
              <v-switch
                :value="isSubscriptionMember"
                @input="switchSubscription"
              ></v-switch>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="d-flex justify-end">
              <v-btn class="mr-4" @click="closeEditModal">キャンセル</v-btn>
              <v-btn color="primary" @click="saveUserSetting">保存</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'nuxt-property-decorator'

@Component
export default class DialogEditUser extends Vue {
  @Prop({ default: () => [] })
  regions!: array

  @Prop({ default: () => [] })
  capacities!: array

  editDialog: boolean = false
  yukinkoNumber: number = null
  name: string = ''
  phoneNumber: string = ''
  region: number = null
  sensorId: number = null
  capacity: number = null
  isSubscriptionMember: boolean = false

  setUser(user: object): void {
    this.yukinkoNumber = user.yukinkoNumber
    this.name = user.name
    this.phoneNumber = user.phoneNumber
    this.region = user.region
    this.sensorId = user.sensorId
    this.capacity = user.capacity
    this.isSubscriptionMember = user.isSubscriptionMember
  }

  openEditModal(): void {
    this.editDialog = true
  }

  closeEditModal(): void {
    this.editDialog = false
  }

  @Emit('save-user-setting')
  saveUserSetting(): object {
    const userSetting: object = {
      yukinkoNumber: this.yukinkoNumber,
      name: this.name,
      phoneNumber: this.phoneNumber,
      region: this.region,
      sensorId: this.sensorId,
      capacity: this.capacity,
      isSubscriptionMember: this.isSubscriptionMember,
    }
    return userSetting
  }

  setYukinkoNumber(yukinkoNumber: number): void {
    this.yukinkoNumber = yukinkoNumber
  }

  setName(name: string): void {
    this.name = name
  }

  setPhoneNumber(phoneNumber: number): void {
    this.phoneNumber = phoneNumber
  }

  setRegion(region: number): void {
    this.region = region
  }

  setSensorId(sensorId: number): void {
    this.sensorId = sensorId
  }

  setCapacity(capacity: number): void {
    this.capacity = capacity
  }

  switchSubscription(isSubscriptionMember: boolean): void {
    this.isSubscriptionMember = isSubscriptionMember
  }
}
</script>
