<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar :dark="true">
                <v-toolbar-title>ONE STOP System</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="ユーザーID"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="パスワード"
                    name="password"
                    prepend-icon="mdi-lock"
                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                  >
                  </v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions class="px-4">
                <v-checkbox label="ログイン状態を保存する"></v-checkbox>
                <v-spacer></v-spacer>
                <v-btn color="primary" href="./home" link>ログイン</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  layout: 'none',
})
export default class Login extends Vue {
  show: boolean = false
}
</script>
