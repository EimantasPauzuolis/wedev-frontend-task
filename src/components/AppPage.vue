<template>
  <section>
    <h1 class='text-3xl font-semibold mb-4'>{{ title }}</h1>
    <slot />
  </section>
</template>

<script lang='ts' setup>
defineProps<{
  title: string
}>()
</script>