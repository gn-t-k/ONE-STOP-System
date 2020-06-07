<template>
  <v-col cols="12">
    <v-data-table
      :headers="headers"
      :items="body"
      hide-default-footer
      class="elevation-1"
    >
      <template v-slot:item.edit="{ item }">
        <v-icon @click="openEditDialog(item.id)">
          mdi-pencil
        </v-icon>
      </template>
      <template v-slot:item.delete="{ item }">
        <v-icon @click="openDeleteDialog(item.id)">
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

  @Emit('open-edit-dialog')
  openEditDialog(id: number): number {
    return id
  }

  @Emit('open-delete-dialog')
  openDeleteDialog(id: number): number {
    return id
  }
}
</script>
