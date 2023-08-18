<template>
  <textarea
    :value="$props.modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
    "
    style="width: 100%"
    placeholder="Type a newline or backslash here to make the problem happen"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
});
</script>
