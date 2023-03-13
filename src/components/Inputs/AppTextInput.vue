<template>
  <div class='flex flex-col gap-2'>
    <label class='text-lg' :for='name'>{{ label }}</label>
    <input
      class='bg-white p-2 rounded border border-gray-300'
      :class='{"ring-1 ring-red-500": errorMessage}'
      :id='name'
      type='text'
      v-model='value'
    >
    <div v-if='errorMessage' class='bg-red-200 p-2 text-red-700 rounded'>{{ errorMessage }}</div>
  </div>
</template>

<script lang='ts' setup>
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string,
  rules?: string,
  label: string
}>()

const { errorMessage, value } = useField(props.name, props.rules)
</script>