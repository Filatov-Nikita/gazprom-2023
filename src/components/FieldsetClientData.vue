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

    <div class="tw-text-xs tw-text-gray-600">
      Копии документов, предусмотренных настоящими пунктами, заверяются лицами, выдавшими (составившими) такие документы или лицами, уполномоченными в соответствии с законодательством Российской Федерации на совершение действий по заверению копий таких документов, в соответствии с п.5(1) Правил поставки газа в Российской Федерации, утвержденных ПП РФ №162 от 05.02.1998 г.
      В случае отсутствия у обратившегося за заключением договора на поставку газа лица, принадлежащего ему на праве собственности или ином законном основании, газоиспользующего оборудования, такое лицо не вправе требовать от поставщика газа заключение договора поставки газа (часть шестая, введена Федеральным законом от 03.11.2015 №307-ФЗ). Абзац 6, ст. 18 Федерального закона от 31.03.1999 г. №69-ФЗ (ред. 28.11.2015 г.)
    </div>
  </div>
</template>
<script setup lang="ts">
import { ElInput, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();
// fStore.values.cli
</script>
