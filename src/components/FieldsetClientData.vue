<template>
  <div class="tw-pt-4">
    <div class="fieldset-label">Контактные данные покупателя</div>
    <ElFormItem required label="Руководитель" prop="clientData.dir">
      <ElInput v-model="fStore.values['clientData.dir']" />
    </ElFormItem>
    <ElFormItem required label="Должность" prop="clientData.pos">
      <ElInput v-model="fStore.values['clientData.pos']" />
    </ElFormItem>
    <ElFormItem required label="Телефон" prop="clientData.phone">
      <ElInput v-model="fStore.values['clientData.phone']" v-maska data-maska="+7 (###) ### ## ##" />
    </ElFormItem>
    <ElFormItem required label="Лицо ответственное за газовое хозяйство" prop="clientData.gazHoz.name">
      <ElInput v-model="fStore.values['clientData.gazHoz.name']" />
    </ElFormItem>
    <ElFormItem required label="Должность" prop="clientData.gazHoz.pos">
      <ElInput v-model="fStore.values['clientData.gazHoz.pos']" />
    </ElFormItem>
    <ElFormItem required label="Телефон" prop="clientData.gazHoz.phone">
      <ElInput v-model="fStore.values['clientData.gazHoz.phone']" v-maska data-maska="+7 (###) ### ## ##" />
    </ElFormItem>
    <ElFormItem required label="Куратор поставщика" prop="clientData.curator">
      <ElInput v-model="fStore.values['clientData.curator']" />
    </ElFormItem>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();
// fStore.values.cli
</script>
