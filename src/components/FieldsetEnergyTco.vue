<template>
  <div class="tw-mb-8">
    <div class="fieldset-label">
      Доля тепловой энергии в общем объеме поставляемых ТСО товаров и услуг
    </div>
    <div class="tw-space-y-12">
      <ElFormItem
        class="form-item"
        prop="energyTco.totalItems"
      >
        <template #label>
          Поставка товаров и услуг, всего
        </template>
        <ElInput v-model="fStore.values['energyTco.totalItems']" placeholder="тыс. руб." />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.srcDataSt9"
      >
        <template #label>
          Источник данных ст.9 (Справка-подтверждение основного вида экономической деятельности, отчет о&nbsp;финансовых результатах, выписка из&nbsp;бухгалтерского баланса письмо потребителя,&nbsp;др.)
        </template>
        <ElInput v-model="fStore.values['energyTco.srcDataSt9']" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.energyTotal"
      >
        <template #label>
          Поставка тепловой энергии
        </template>
        <ElInput v-model="fStore.values['energyTco.energyTotal']" placeholder="тыс. руб." />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.srcDataSt11"
      >
        <template #label>
          Источник данных ст.11 (22ЖКХ, Справка-подтверждение основного вида экономической деятельности, отчет о&nbsp;финансовых результатах, выписка из&nbsp;бухгалтерского баланса, письмо потребителя, др.)
        </template>
        <ElInput v-model="fStore.values['energyTco.srcDataSt11']" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.gasPercProd"
      >
        <template #label>
          Доля поставки тепловой энергии в общем объеме поставляемых организацией товаров и услуг
        </template>
        <ElInput v-model="fStore.values['energyTco.gasPercProd']" placeholder="%" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.gasPercNas"
      >
        <template #label>
          Доля поставки тепловой энергии населению и&nbsp;бюджетофинансируемым организациям в&nbsp;общем объеме поставляемых организацией товаров и&nbsp;услуг
        </template>
        <ElInput v-model="fStore.values['energyTco.gasPercNas']" placeholder="%" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyTco.gasPercNas"
      >
        <template #label>
          Необходимый критерий, более 75% ст.21 > 75% (истина) ст.21 &lt; 75% (ложь)
        </template>
        <ElInput v-model="fStore.values['energyTco.gasPercNas']" placeholder="%" />
      </ElFormItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();
</script>
