<template>
  <v-app>
    <v-container class="mb-8">
      <v-row>
        <v-breadcrumbs :items="breadCrumbs" class="pl-3"></v-breadcrumbs>
      </v-row>
      <v-row>
        <heading-level-2 heading-text="ホーム"></heading-level-2>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <heading-level-3
          heading-text="アラート：最終更新2020年7月1日（16:00）"
        ></heading-level-3>
        <v-col class="d-flex align-center justify-end">
          <v-btn color="primary">印刷</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <list-alert :body="body.alerts"></list-alert>
      </v-row>
    </v-container>
    <v-container class="mb-8">
      <v-row>
        <heading-level-3
          heading-text="給油指示情報：最終更新2020年7月1日（16:00）"
        ></heading-level-3>
        <filter-refule-orders
          :is-subscription-member="isSubscriptionMember"
          :regions="regions"
          :regions-value="regionsValue"
          @set-region="setRegion"
          @switch-subscription="switchSubscription"
        ></filter-refule-orders>
        <v-col class="d-flex align-center justify-end" cols="1">
          <v-btn color="primary">印刷</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <list-refule-orders :body="body.refuleOrders"></list-refule-orders>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import HeadingLevel2 from '~/components/headings/HeadingLevel2'
import HeadingLevel3 from '~/components/headings/HeadingLevel3'
import ListAlert from '~/components/lists/ListAlert'
import ListRefuleOrders from '~/components/lists/ListRefuleOrders'
import FilterRefuleOrders from '~/components/filters/FilterRefuleOrders'

@Component({
  components: {
    HeadingLevel2,
    HeadingLevel3,
    ListAlert,
    ListRefuleOrders,
    FilterRefuleOrders,
  },
})
export default class Home extends Vue {
  breadCrumbs = [
    {
      text: 'ホーム',
      disabled: true,
      href: './',
    },
  ]

  body = {
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
  }

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

  regionsValue = {
    value: 1,
    text: '地区1',
  }

  isSubscriptionMember = false

  setRegion(region: object): void {
    this.regionsValue = region
  }

  switchSubscription(isSubscriptionMember: boolean): void {
    this.isSubscriptionMember = isSubscriptionMember
  }
}
</script>
