<template>
  <div class="modal-sign-up">
    <!-- <template v-if="true">
      <Loader />
    </template> -->
    <div
      class="modal fade"
      id="m-signup"
      tabindex="-1"
      role="dialog"
      aria-labelledby="m-signupLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-primary" id="m-signupLabel">Sign Up</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="handleSignUp" action="POST" ref="formSignUp">
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
                <span
                  class="text-danger ml-1"
                  v-if="$v.email.$dirty && !$v.email.email"
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
              </div>
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="fullName"
                  name="fullName"
                  placeholder="fullName"
                  v-model="fullName"
                  required
                  @blur="$v.fullName.$touch()"
                />
                <span
                  class="text-danger ml-1"
                  v-if="$v.fullName.$dirty && !$v.fullName.required"
                  >(*) fullName is not empty</span
                >
                <span
                  class="text-danger ml-1"
                  v-if="$v.fullName.$dirty && !$v.fullName.minLength"
                  >(*) fullName much be more
                  {{ $v.fullName.$params.minLength.min }} character</span
                >
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  name="signup"
                  id="signup"
                  class="btn btn-primary"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";
import * as types from "../../store/modules/user/constants";
import $ from "jquery";

// import Loader from "./../Loader";

export default {
  // components: {
  //   Loader,
  // },
  data() {
    return {
      email: "",
      password: "",
      fullName: "",
    };
  },
  computed: {
    loading() {
      return this.$store.state.user.loading;
    },
  },
  methods: {
    handleSignUp() {
      console.log("handleSignUp");

      const SignUpUser = {
        email: this.email,
        password: this.password,
        fullName: this.fullName,
      };

      if (!this.$v.$invalid) {
        this.$store.dispatch(types.A_USER_CREATE, SignUpUser);
        $("#m-signup").modal("hide");
        this.$refs.formSignUp.reset();
      }
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
    fullName: {
      required,
      minLength: minLength(4),
    },
  },
};
</script>

<style>
</style>
