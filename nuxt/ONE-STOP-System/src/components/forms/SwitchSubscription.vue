<template>
  <div>
    <v-col cols="2">
      <v-subheader>定期配送</v-subheader>
    </v-col>
    <v-col>
      <v-switch
        :value="isSubscriptionMember"
        @input="switchSubscription"
      ></v-switch>
    </v-col>
  </div>
</template>

<script>
export default {
  data: () => ({
    isSubscriptionMember: false,
  }),

  methods: {
    switchSubscription(isSubscriptionMember) {
      this.isSubscriptionMember = isSubscriptionMember
      this.$emit('switchSubscription', isSubscriptionMember)
    },
  },
}
</script>
