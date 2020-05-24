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

<script>
export default {
  props: {
    regions: {
      type: Array,
      default: () => {},
      required: true,
    },
  },

  data: () => ({
    yukinkoNumber: null,
    name: '',
    regionsValue: null,
  }),

  methods: {
    setYukinkoNumber(yukinkoNumber) {
      this.$emit('setYukinkoNumber', yukinkoNumber)
    },

    setName(name) {
      this.$emit('setName', name)
    },

    setRegionsValue(regionsValue) {
      this.$emit('setRegionsValue', regionsValue)
    },

    setFilteredUserList() {
      const filteredUserList = {
        yukinkoNumber: this.yukinkoNumber,
        name: this.name,
        region: this.regionsValue,
      },
      this.$emit("setFilteredUserList", filteredUserList)
    },
  },
}
</script>
