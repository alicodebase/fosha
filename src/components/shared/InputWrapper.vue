<template>
  <div class="tw-flex-auto tw-mx-1">
    <p class="tw-mb-2 tw-flex tw-items-center tw-gap-1 tw-font-bold">
      {{ label }}
      <span v-if="isRequired">*</span>
    </p>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    isRequired: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: 'label',
    },
  },
}
</script>
