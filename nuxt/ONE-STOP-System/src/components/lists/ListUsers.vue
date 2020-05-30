<template>
  <v-col cols="12">
    <v-data-table
      :headers="headers"
      :items="body"
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
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class ListUsers extends Vue {
  headers: array = [
    { text: '編集', value: 'edit' },
    { text: '雪んこNo.', value: 'yukinkoNumber' },
    { text: '氏名', value: 'name' },
    { text: '電話番号', value: 'phoneNumber' },
    { text: '地区', value: 'regions' },
    { text: 'センサID', value: 'sensorId' },
    { text: 'タンクの容量', value: 'capacity' },
    { text: '定期配送', value: 'isSubscriptionMember' },
    { text: '削除', value: 'delete' },
  ]

  @Prop({ default: [] })
  body!: array

  @Emit('open-edit-modal')
  openEditModal() {}

  @Emit('open-delete-modal')
  openDeleteModal() {}
}
</script>
