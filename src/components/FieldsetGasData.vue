<template>
  <div>
    <div class="fields-wrapper">
      <ElFormItem required label="Дата начала поставки газа" prop="gazData.from">
        <ElDatePicker
          class="date-picker"
          v-model="fStore.values['gazData.from']"
          type="date"
          placeholder="Предполагаемый период"
          format="DD.MM.YYYY"
          value-format="YYYY-MM-DD"
        />
      </ElFormItem>
      <ElFormItem class="form-item" required label="Годовой объем по всем точкам подключения" prop="gazData.yearCapacity">
        <ElInput
          class="tw-w-full"
          v-model="fStore.values['gazData.yearCapacity']"
          placeholder="тыс.м"
        />
      </ElFormItem>
    </div>
    <div class="tw-max-w-[800px]">
      <FieldsetGasEq class="tw-mb-4" />
      <FieldsetGasEqMesm class="tw-mb-4" />
    </div>
    <FieldsetGasPoints class="tw-mb-4" />
  </div>
</template>
<script setup lang="ts">
import { ElDatePicker, ElFormItem, ElInput } from 'element-plus';
import FieldsetGasEq from './FieldsetGasEq.vue';
import FieldsetGasEqMesm from './FieldsetGasEqMesm.vue';
import FieldsetGasPoints from './FieldsetGasPoints.vue';
import { useFormStore } from '../store/form';

const fStore = useFormStore();

</script>
