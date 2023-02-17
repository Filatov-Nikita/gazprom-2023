<template>
  <div class="tw-mb-8">
    <div class="fieldset-label">
      Доля тепловой энергии населению, управляющим организациям (ТСЖ) и бюджетным организациям в общем объеме поставляемой тепловой энергии
    </div>
    <div class="tw-space-y-12">
      <ElFormItem
        class="form-item"
        prop="energyNas.fuelReduce"
      >
        <template #label>
          Расход топлива фактически на весь объем произведенных ресурсов, газообразное топливо <br/> (1-ТЕП: стр&nbsp;58 (старая&nbsp;версия) стр.&nbsp;113 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.fuelReduce']" placeholder="тыс. куб. м" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.gasSrc"
      >
        <template #label>
          Число источников теплоснабжения, работающих на&nbsp;газообразном топливе (1-ТЕП:&nbsp;стр&nbsp;17 (старая&nbsp;версия) стр.&nbsp;50 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.gasSrc']" placeholder="шт." />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.total"
      >
        <template #label>
          Отпущено тепловой энергии - всего (1-ТЕП: стр&nbsp;40 (старая&nbsp;версия) стр&nbsp;98 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.total']" placeholder="Гкал" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.tcj"
      >
        <template #label>
          Отпущено тепловой энергии населению и&nbsp;управляющим организациям&nbsp;(ТСЖ) (1-ТЕП: стр&nbsp;42 (старая&nbsp;версия) стр.&nbsp;100 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.tcj']" placeholder="Гкал" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.budget"
      >
        <template #label>
          Отпущено тепловой энергии бюджетофинансируемым организациям (1-ТЕП: стр&nbsp;43 (старая&nbsp;версия) стр.&nbsp;101 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.budget']" placeholder="Гкал" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.otherProd"
      >
        <template #label>
          Отпущено тепловой энергии другому предприятию (перепродавцу) (1-ТЕП: стр&nbsp;46 (старая&nbsp;версия) стр.&nbsp;104 (новая&nbsp;версия))
        </template>
        <ElInput v-model="fStore.values['energyNas.otherProd']" placeholder="Гкал" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.energyPerc"
      >
        <template #label>
          Доля поставки тепловой энергии населению и&nbsp;бюджетофинансируемым организациям в&nbsp;общей поставке тепловой энергии
        </template>
        <ElInput v-model="fStore.values['energyNas.energyPerc']" placeholder="%" />
      </ElFormItem>
      <ElFormItem
        class="form-item"
        prop="energyNas.src"
      >
        <template #label>
          Источник данных ст.11-16 (1-ТЕП, 22ЖКХ, письмо&nbsp;потребителя,&nbsp;др.)
        </template>
        <ElInput v-model="fStore.values['energyNas.src']" />
      </ElFormItem>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();
</script>
