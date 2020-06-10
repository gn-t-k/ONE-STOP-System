<template>
  <v-app>
    <v-container>
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-0"></v-breadcrumbs>
      </v-row>
      <heading-level-2 heading-text="利用者登録"></heading-level-2>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <v-col cols="2">
          <v-subheader>雪ん子No.</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="ナンバー入力"
            :value="yukinkoNumber"
            @input="setYukinkoNumber"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>氏名</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="テキストを入力"
            :value="name"
            @input="setName"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>電話番号</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="ナンバー入力"
            :value="phoneNumber"
            @input="setPhoneNumber"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>地区</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="regions"
            label="地区を選択"
            :value="region"
            @input="setRegion"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>センサID</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            label="ナンバー入力"
            :value="sensorId"
            @input="setSensorId"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>タンクの容量</v-subheader>
        </v-col>
        <v-col cols="6">
          <v-autocomplete
            :items="capacity"
            label="タンクの容量を選択"
            :value="capacity"
            @input="setCapacity"
          ></v-autocomplete>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="2">
          <v-subheader>定期配送</v-subheader>
        </v-col>
        <v-col>
          <v-switch
            :value="isSubscriptionMember"
            @input="switchSubscription"
          ></v-switch>
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

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeadingLevel2 from '~/components/headings/HeadingLevel2'

@Component({
  components: {
    HeadingLevel2,
  },
})
export default class UserRegisteration extends Vue {
  yukinkoNumber: number = null
  name: string = ''
  phoneNumber: string = ''
  region: number = null
  sensorId: number = null
  capacity: number = null
  isSubscriptionMember: boolean = false

  breadCrumbs = [
    {
      text: '利用者登録',
      disabled: true,
      href: './userRegisteration',
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
