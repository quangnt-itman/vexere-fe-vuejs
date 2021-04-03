<template>
  <div class="login-admin-page">
    <h1 align="center">Login Admin Page</h1>

    <form
      @submit.prevent="handleLoginAdmin"
      action="POST"
      ref="formLogin"
      class="w-50 mx-auto"
    >
      <!--  -->
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          v-model="email"
          required
          @blur="$v.email.$touch()"
        />
        <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
        <span
          class="text-danger ml-1"
          v-if="$v.email.$dirty && !$v.email.required"
          >(*) email is not empty</span
        >
        <span class="text-danger ml-1" v-if="$v.email.$dirty && !$v.email.email"
          >(*) email is not correct format</span
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          name="password"
          placeholder="Password"
          v-model="password"
          required
          @blur="$v.password.$touch()"
        />
      </div>
      <span
        class="text-danger ml-1"
        v-if="$v.password.$dirty && !$v.password.required"
        >(*) password is not empty</span
      >
      <span
        class="text-danger ml-1"
        v-if="$v.password.$dirty && !$v.password.minLength"
        >(*) password much be more
        {{ $v.password.$params.minLength.min }} character</span
      >

      <div class="">
        <button type="submit" name="login" id="login" class="btn btn-primary">
          Log in
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import $ from "jquery";
import * as types from "../../../store/modules/auth/constants";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLoginAdmin() {
      console.log("handleLoginAdmin");
      // console.log(this.$store);

      const authUser = {
        email: this.email,
        password: this.password,
      };

      console.log(this);

      if (!this.$v.$invalid) {
        this.$store.dispatch(types.A_AUTH_LOGIN_ADMIN, authUser);
        $("#m-login").modal("hide");
        this.$refs.formLogin.reset();
      }
    },
    clearModal() {
      this.$refs.formLogin.reset();
    },
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(4),
    },
  },
};
</script>

<style>
</style>
