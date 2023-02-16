<template>
  <div>
    <div class="fieldset-label">Реквизиты счета</div>
    <ElFormItem required label="Расчетный счет" prop="account.number">
      <ElInput v-model="fStore.values['account.number']" />
    </ElFormItem>
    <ElFormItem required label="БИК" prop="account.bik">
      <ElInput v-model="fStore.values['account.bik']" />
    </ElFormItem>
    <ElFormItem required label="Корр/счет" prop="account.korr">
      <ElInput v-model="fStore.values['account.korr']" />
    </ElFormItem>
    <ElFormItem required label="Наименование банка" prop="account.name">
      <ElInput v-model="fStore.values['account.name']" />
    </ElFormItem>
    <ElFormItem required label="Адрес банка" prop="account.address">
      <ElInput v-model="fStore.values['account.address']" />
    </ElFormItem>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();

</script>
