<template>
  <div class="tw-pt-4">
    <div class="table-label">
      Запрашиваемый к поставке объем газа по точкам подключения
    </div>
    <table class="app-table">
      <thead>
        <tr>
          <th class="t-th tw-w-[85px]">№ точка подключения</th>
          <th
            class="t-th"
            v-for="month in months"
          >
            {{ month }}
          </th>
          <th class="t-th tw-w-[70px]">Итого</th>
          <th class="t-th tw-w-[85px]"></th>
        </tr>
      </thead>
      <tbody>
        <GasPointRow
          v-for="point, index in fStore.values.gazPoints"
          :key="point.id"
          :index="index"
          :point="point"
          :canRemove="canRemove"
          :sum="rowSums[index]"
          @remove="removeRow(index)"
        />
        <tr key="total-count">
          <td class="tw-p-2 tw-text-sm tw-font-medium" key="total-count-title">Итого:</td>
          <td class="tw-p-2 tw-text-center" v-for="key in monthList" :key="key">
            <span class="tw-text-sm">{{ colSums[key] }}</span>
          </td>
          <td class="tw-p-2" key="total-count-all">
            <span class="tw-text-sm">{{ total }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <ElButton class="tw-mt-2" type="primary" @click="appendRow">
      Добавить
    </ElButton>
  </div>
</template>
<script setup lang="ts">
  import { ElButton } from 'element-plus';
  import { months } from '../globals/constants';
  import { computed} from 'vue';
  import { useFormStore } from '../store/form';
  import GasPointRow from './GasPointRow.vue';

  const fStore = useFormStore();

  function appendRow() {
    fStore.values.gazPoints.push({
      id: Date.now(),
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      okt: 0,
      nov: 0,
      dec: 0
    });
  }

  const monthList = [ 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec' ] as const;

  function removeRow(index: number) {
    fStore.values.gazPoints.splice(index, 1);
  }

  const canRemove = computed(() => fStore.values.gazPoints.length > 1);

  const rowSums = computed(() => {
    const points = fStore.values.gazPoints;
    return points.map(({id, ...months}) => {
      return Object.values(months).reduce((acc, value) => {
        acc += value;
        return acc;
      }, 0);
    });
  });

  const colSums = computed(() => {
    const points = fStore.values.gazPoints;
    return monthList.reduce((acc, key) => {
      acc[key] = points.reduce((acc, point) => {
        acc += point[key];
        return acc;
      }, 0);
      return acc;
    }, {} as Record<string, number>);
  });

  const total = computed(() => {
    return rowSums.value.reduce((acc, sum) => {
      acc += sum;
      return acc;
    }, 0)
  });
</script>
<style scoped>
  .t-th {
    font-size: 10px;
    line-height: 1;
    font-weight: 500;
    color: theme('colors.gray.500');
    text-align: left;
    padding: 8px;
  }
</style>
