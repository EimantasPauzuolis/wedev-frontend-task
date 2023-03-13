<template>
  <button
    :type='type'
    class='text-center text-white font-bold uppercase rounded-md px-4 py-2 bg-indigo-600'
  >
    <slot />
  </button>
</template>

<script lang='ts' setup>
withDefaults(defineProps<{
  type?: string;
}>(), {
  type: 'button'
})
</script>
