<template>
  <ElFormItem :id="name" :error="errorMessage" :label="label" label-position="left">
    <ElInput v-bind="$attrs" v-model="value" :placeholder="label" :validate-event="false" />
  </ElFormItem>
</template>
<script setup lang="ts">
import { useField } from 'vee-validate';
import { ElInput, ElFormItem } from 'element-plus';
import { toRefs, watch } from 'vue';

interface Props {
  label: string,
  name: string,
  rules?: string,
  modelValue: string,
}

interface Emits {
  (event: 'update:modelValue', value: string): void
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();
const { name, label, rules } = toRefs(props);

const { errorMessage, value } = useField<string>(name, rules, { label });

watch(() => props.modelValue, (newVal) => {
  if(value.value !== newVal) {
    value.value = newVal;
  }
});

watch(value, (newVal) => {
  emit('update:modelValue', newVal);
})
</script>
