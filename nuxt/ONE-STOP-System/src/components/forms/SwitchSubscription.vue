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

<script lang="ts">
import { Component, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class SwitchSubscription extends Vue {
  isSubscriptionMember: boolean = false

  @Emit('switchSubscription')
  switchSubscription(isSubscriptionMember: boolean): boolean {
    this.isSubscriptionMember = isSubscriptionMember
    return isSubscriptionMember
  }
}
</script>
