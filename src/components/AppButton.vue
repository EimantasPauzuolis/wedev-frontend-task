<template>
  <button
    :type='type'
    :disabled='disabled'
    class='text-center text-white font-bold uppercase rounded-md px-4 py-2 '
    :class='{"bg-gray-500": disabled, "bg-indigo-600": !disabled}'
    v-bind='$attrs'
  >
    <slot />
  </button>
</template>

<script lang='ts' setup>
type ButtonProps = {
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  disabled: false
})
</script>
