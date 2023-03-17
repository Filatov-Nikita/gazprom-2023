<template>
   <tr>
      <td class="t-td t-td-left">{{ index + 1 }}</td>
      <td
        class="t-td"
        v-for="month in monthsShort"
      >
        <ElFormItem label-width="0px" :rules="requiredRule" :prop="`gazPoints.${index}.${month}`">
          <ElInputNumber
            :modelValue="point[month]"
            :min="0"
            placeholder="тыс. м3"
            :controls="false"
            @change="$event => point[month] = <number>$event"
          />
        </ElFormItem>
      </td>
      <td class="t-td t-td-right">{{ sum }}</td>
      <td class="t-td">
        <ElButton size="small" type="danger" @click="emit('remove')" :disabled="!canRemove">
          Удалить
        </ElButton>
      </td>
    </tr>
</template>
<script setup lang="ts">
  import { ElFormItem, ElButton, ElInputNumber } from 'element-plus';
  import { monthsShort } from '../globals/constants';
  import type { GasPoint } from '../types/form';
  import { requiredRule } from '../globals/form-rules';

  defineProps<{
    point: GasPoint,
    index: number,
    canRemove: boolean,
    sum: number
  }>();

  const emit = defineEmits<{(event: 'remove'): void}>();
</script>
<style scoped>
.t-td {
  font-size: 12px;
  padding: 4px;
  vertical-align: top;
}

.t-td-left, .t-td-right {
  padding-top: 12px;
  padding-left: 8px;
  font-weight: 600;
}
</style>
