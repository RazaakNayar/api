<template>
  <v-select
    :value="userID"
    :disabled="readonly"
    :id="name"
    :options="choices"
    :placeholder="options.placeholder"
    @input="$emit('input', $event)"></v-select>
</template>

<script>
import mixin from "../../../mixins/interface";

export default {
  mixins: [mixin],
  computed: {
    userID() {
      if (!this.value) return null;
      if (typeof this.value === "object") return this.value.id;
      return this.value;
    },
    choices() {
      const users = this.$store.state.users || {};

      let choices = {};

      Object.keys(users).forEach(key => {
        choices[key] = this.$helpers.micromustache.render(
          this.options.template,
          users[key]
        );
      });

      return choices;
    }
  }
};
</script>

<style lang="scss" scoped>
.v-select {
  margin-top: 0;
  max-width: var(--width-medium);
}
</style>
