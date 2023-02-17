<template>
   <tr>
      <td class="t-td t-td-left">{{ index + 1 }}</td>
      <td
        class="t-td"
        v-for="month in monthsShort"
      >
        <ElFormItem label-width="0px" required :prop="`gazPoints.${index}.${month}`">
          <ElInputNumber v-model="point[month]" :min="0" placeholder="тыс. м3" :controls="false" />
        </ElFormItem>
      </td>
      <td class="t-td t-td-right">{{ total }}</td>
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
  import { computed } from 'vue';
  import type { GasPoint } from '../types/form';

  const props = defineProps<{
    point: GasPoint,
    index: number,
    canRemove: boolean
  }>();

  const emit = defineEmits<{(event: 'remove'): void}>();

  const total = computed(() => {
    return Object.entries(props.point).reduce((acc, [key, val]) => {
      if(key !== 'id') {
        acc += val;
      }
      return acc;
    }, 0);
  });
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
