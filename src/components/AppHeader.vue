<template>
  <div>
    <v-toolbar app dark class="teal darken-1" height="40px">
      <router-link to="/" tag="span" style="cursor:pointer">
        <v-toolbar-title v-text="'Staff'"></v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <v-menu :nudge-width="100" v-if="isUserAuthenticated">
        <v-toolbar-title slot="activator">
          <span>Мой кабинет</span>
          <v-icon dark right>line_weight</v-icon>
        </v-toolbar-title>

        <v-list>
          <v-list-tile
            v-for="(item, i) in profileItems"
            flat
            :key="`profileItems${i}`"
            :to="item.route"
            active="red"
          >
            <v-list-tile-title>
              <v-icon left v-html="item.icon" color="teal darken-1"></v-icon>
              {{ item.title }}
            </v-list-tile-title>
          </v-list-tile>
          <v-btn flat @click.prevent="signout" v-if="isUserAuthenticated">
            <v-icon left>exit_to_app</v-icon>Выйти
          </v-btn>
        </v-list>
      </v-menu>

      <v-toolbar-items v-if="!isUserAuthenticated">
        <v-btn v-for="(item, i) in menuItems" flat :key="`menuItem${i}`" :to="item.route">
          <v-icon left v-html="item.icon"></v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    };
  },
  computed: {
    isUserAuthenticated() {
      return this.$store.getters.isUserAuthenticated;
    },
    menuItems() {
      return [
        // {
        //   title: "Добавить сотрудника",
        //   route: "/addEmployee",
        //   icon: "add"
        // }
        // {
        //   title: "Профиль",
        //   route: "/profile",
        //   icon: "account_box"
        // },
        // {
        //   title: "Выйти",
        //   route: "/logout",
        //   icon: "exit_to_app"
        // }
        {
          title: "Войти",
          route: "/signin",
          icon: "input"
        },
        {
          title: "Зарегистрироваться",
          route: "/signup",
          icon: "lock_open"
        }
      ];
    },
    profileItems() {
      return [
        {
          title: "Добавить сотрудника",
          route: "/addEmployee",
          icon: "add"
        },
        {
          title: "Профиль",
          route: "/profile",
          icon: "account_box"
        },
        {
          title: "Редактировать профиль",
          route: "/edit",
          icon: "edit"
        }
        // {
        //   title: "Выйти",
        //   route: "/logout",
        //   icon: "exit_to_app"
        // }
      ];
    }
  },
  methods: {
    signout() {
      this.$confirm("Вы действительно хотите выйти?").then(res => {
        if (res) this.$store.dispatch("SIGNOUT");
      });
    }
  }
};
</script>

<style scoped>
.v-list__tile__title {
  color: #000 !important;
}
</style>
