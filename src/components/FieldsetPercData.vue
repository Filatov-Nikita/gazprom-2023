<template>
  <div>
    <div class="fieldset-label">Данные заявителя</div>
    <ElFormItem required label="ИНН" prop="percData.inn">
      <ElInput v-model="fStore.values['percData.inn']" v-maska data-maska="############" />
    </ElFormItem>
    <ElFormItem required label="КПП" prop="percData.kpp">
      <ElInput v-model="fStore.values['percData.kpp']" v-maska data-maska="#########"/>
    </ElFormItem>
    <ElFormItem required label="ЕГРЮЛ/ЕГРИП" prop="percData.egrip">
      <ElInput v-model="fStore.values['percData.egrip']" />
    </ElFormItem>
    <ElFormItem required label="Краткое наименование организации" prop="percData.shortname">
      <ElInput v-model="fStore.values['percData.shortname']" />
    </ElFormItem>
    <ElFormItem required label="Полное наименование организации" prop="percData.fullname">
      <ElInput v-model="fStore.values['percData.fullname']" />
    </ElFormItem>
    <ElFormItem required label="Телефон 1" prop="percData.phone">
      <ElInput v-model="fStore.values['percData.phone']" v-maska data-maska="+7 (###) ### ## ##" />
    </ElFormItem>
    <ElFormItem label="Телефон 2" prop="percData.phone2">
      <ElInput v-model="fStore.values['percData.phone2']" v-maska data-maska="+7 (###) ### ## ##" />
    </ElFormItem>
    <ElFormItem label="Факс" prop="percData.fax">
      <ElInput v-model="fStore.values['percData.fax']" />
    </ElFormItem>
    <ElFormItem label="E-mail" prop="percData.email">
      <ElInput v-model="fStore.values['percData.email']" />
    </ElFormItem>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();

</script>
