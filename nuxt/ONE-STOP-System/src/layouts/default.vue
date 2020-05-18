<template>
  <v-app>
    <v-app-bar app color="0A0A0A" dark clipped-left>
      <h1>ONE STOP system</h1>
      <v-spacer></v-spacer>
      <span>加盟店A様</span>
      <v-menu bottom left>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, i) in menuItems"
            :key="i"
            @click="link(item.href)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer app dark clipped>
      <v-list>
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in navigationItems"
            :key="i"
            @click="link(item.href)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content class="ml-8">
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    navigationItems: {
      home: {
        text: 'ホーム',
        href: './home',
      },
      userList: {
        text: '利用者一覧',
        href: './userList',
      },
      userRegisteration: {
        text: '利用者登録',
        href: './userRegisteration',
      },
    },
    menuItems: {
      logout: {
        title: 'ログアウト',
        href: './login',
      },
    },
  }),

  methods: {
    link(path) {
      window.location.href = path
    },
  },
}
</script>
