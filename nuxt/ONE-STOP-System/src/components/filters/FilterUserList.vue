<template>
  <v-col cols="12">
    <v-row>
      <v-col cols="3">
        <v-text-field
          label="雪んこNo.を入力"
          :value="yukinkoNumber"
          @input="setYukinkoNumber"
        >
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-text-field label="氏名を入力" :value="name" @input="setName">
        </v-text-field>
      </v-col>
      <v-col cols="3">
        <v-autocomplete
          :items="regions"
          label="地区を選択"
          :value="regionsValue"
          @input="setRegionsValue"
        >
        </v-autocomplete>
      </v-col>
      <v-col cols="3" class="d-flex justify-end align-center">
        <v-btn dark color="primary" @input="setFilteredUserList"
          >絞り込み</v-btn
        >
      </v-col>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class FilterUserList extends Vue {
  yukinkoNumber: number | null = null

  name: string = ''

  regionsValue: number | null = null

  @Prop({ default: [] })
  regions!: [object]

  setYukinkoNumber(yukinkoNumber: number): void {
    this.yukinkoNumber = yukinkoNumber
  }

  setName(name: string): void {
    this.name = name
  }

  setRegionsValue(regionsValue: number): void {
    this.regionsValue = regionsValue
  }

  @Emit('set-filtered-user-list')
  setFilteredUserList(): object {
    const filterUserList = {
      yukinkoNumber: this.yukinkoNumber,
      name: this.name,
      region: this.regionsValue,
    }
    return filterUserList
  }
}
</script>
