<template>
  <div class='flex flex-col gap-2'>
    <label class='text-lg' :for='name'>{{ label }}</label>
    <select
      class='p-2 rounded border border-gray-300'
      :class='{"ring-1 ring-red-500": errorMessage}'
      :id='name'
      v-model='value'
    >
      <option
        v-for='option in options'
        :value='option.value'
      >
        {{ option.label }}
      </option>
    </select>
    <div v-if='errorMessage' class='bg-red-200 p-2 text-red-700 rounded'>{{ errorMessage }}</div>
  </div>
</template>

<script lang='ts' setup>
import { useField } from 'vee-validate'

const props = defineProps<{
  name: string,
  rules?: string,
  label: string,
  options: Array<{
    label: string,
    value: string | number
  }>
}>()

const { errorMessage, value } = useField(props.name, props.rules)
</script>