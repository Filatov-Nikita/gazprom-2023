<template>
  <div>
    <div class="fieldset-label">Общие данные на основании объемов по заявке</div>
    <div v-if="!fStore.isType1 && !fStore.isType2" class="tw-text-gray-400 tw-mb-8">
      Для отображения полного списка полей выберите заявителя
    </div>
    <ElFormItem class="form-item" label="Расчетные объемы поставки газа на плановый год" prop="generalData.plan">
      <ElInput v-model="fStore.values['generalData.plan']" placeholder="тыс. куб. м" />
    </ElFormItem>
    <ElFormItem class="form-item" label="Расчетные объемы поставки газа на текущий год" prop="generalData.currentYear">
      <ElInput v-model="fStore.values['generalData.currentYear']" placeholder="тыс. куб. м" />
    </ElFormItem>
    <ElFormItem
      v-if="fStore.isType1"
      class="form-item"
      label="Прогноз на текущий год"
      prop="generalData.currentYearSuppose"
    >
      <ElInput v-model="fStore.values['generalData.currentYearSuppose']" placeholder="тыс. куб. м" />
    </ElFormItem>
    <ElFormItem class="form-item" label="Факт потребления в прошлом году" prop="generalData.factLastYear">
      <ElInput v-model="fStore.values['generalData.factLastYear']" placeholder="тыс. куб. м" />
    </ElFormItem>
    <ElFormItem class="form-item" label="Отклонение расчетных объемов на плановый год относительно факта потребления прошлого года" prop="generalData.factDeviation">
      <ElInput v-model="fStore.values['generalData.factDeviation']" placeholder="тыс. куб. м" />
    </ElFormItem>
    <ElFormItem class="form-item" label="Период потребления в прошлом году" prop="generalData.periodLastYearFrom">
      <ElDatePicker
        class="date-picker"
        placeholder="С дата"
        v-model="fStore.values['generalData.periodLastYearFrom']"
        value-format="YYYY-MM-DD"
        format="DD.MM.YYYY"
      />
    </ElFormItem>
    <ElFormItem class="form-item" prop="generalData.periodLastYearTo">
      <ElDatePicker
        class="date-picker"
        placeholder="По дата"
        v-model="fStore.values['generalData.periodLastYearTo']"
        value-format="YYYY-MM-DD"
        format="DD.MM.YYYY"
      />
    </ElFormItem>
    <template v-if="fStore.isType1">
      <ElFormItem class="form-item" label="Кол-во котельных по договору" prop="generalData.count">
        <ElInput v-model="fStore.values['generalData.count']" placeholder="шт." />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        label="Причина отклонения расчетного объема поставки газа на плановый год от текущего"
        prop="generalData.count">
        <ElSelect class="tw-w-full" v-model="fStore.values['generalData.reason']" placeholder="Выбрать причину">
          <ElOption
            value="changeKot"
            label="За счет изменения количества котельных"
          />
          <ElOption
            value="changeEnergy"
            label="За счет изменения объемов реализации тепловой энергии (количество покупателей, абонентов и т.д.)"
          />
          <ElOption
            value="castFact"
            label="За счет приведения расчетных объемов к фактическому потреблению"
          />
          <ElOption value="other" label="Другая причина (указать какая)" />
        </ElSelect>
      </ElFormItem>
      <ElFormItem v-if="fStore.values['generalData.reason'] === 'other'" class="form-item" label="Причина" prop="generalData.reasonText">
        <ElInput v-model="fStore.values['generalData.reasonText']" />
      </ElFormItem>
    </template>
    <template v-else-if="fStore.isType2">
      <ElFormItem class="form-item" label="Финансирование расходов на оплату газа в текущем году" prop="generalData.financeCurrentYear">
        <ElInput v-model="fStore.values['generalData.financeCurrentYear']" placeholder="руб." />
      </ElFormItem>
      <ElFormItem class="form-item" label="Стоимость контракта на текущий год" prop="generalData.costCurrentYear">
        <ElInput v-model="fStore.values['generalData.costCurrentYear']" placeholder="руб." />
      </ElFormItem>
    </template>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem, ElDatePicker, ElSelect, ElOption } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();
</script>
