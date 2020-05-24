<template>
  <v-col class="d-flex align-center justify-end" cols="5">
    <v-subheader>定期配送</v-subheader>
    <v-switch v-model="toggle" class="mr-8"></v-switch>
    <v-autocomplete
      :items="regions"
      :value="regionsValue"
      label="地区"
      hide-details
      class="mr-8 mt-0 pt-0"
      @input="setRegion"
    >
    </v-autocomplete>
  </v-col>
</template>

<script>
export default {
  props: {
    regions: {
      type: Array,
      default: () => [],
      required: true,
    },

    regionsValue: {
      type: Object,
      default: () => {},
      required: true,
    },
  },

  data: () => ({
    isSubscriptionMember: false,
  }),

  methods: {
    setRegion(region) {
      this.$emit('setRegion', region)
    },
  },
}
</script>
