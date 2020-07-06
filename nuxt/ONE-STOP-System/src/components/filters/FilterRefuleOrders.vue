<template>
  <v-col class="d-flex align-center justify-end" cols="5">
    <v-subheader>定期配送</v-subheader>
    <v-switch
      :value="isSubscriptionMember"
      class="mr-8"
      @input="switchSubscription"
    ></v-switch>
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

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'nuxt-property-decorator'

@Component
export default class FilterRefuleOrders extends Vue {
  isSubscriptionMember: boolean = false

  @Prop({ default: [] })
  regions!: [object]

  @Prop({ default: {} })
  regionsValue!: object

  @Emit('set-region')
  setRegion(region: object): object {
    return region
  }

  @Emit('switch-subscription')
  switchSubscription(isSubscriptionMember: boolean): boolean {
    return isSubscriptionMember
  }
}
</script>
