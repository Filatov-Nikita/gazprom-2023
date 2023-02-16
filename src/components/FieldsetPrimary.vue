<template>
  <div class="tw-mb-8">
    <div class="fieldset-label">Первичная информация</div>
    <ElFormItem required label="Тип заявителя" prop="primary.typePerc">
      <ElSelect class="tw-w-full" v-model="fStore.values['primary.typePerc']" placeholder="Выберите заявителя">
        <ElOption
          label="ТСО (ООК – 1 тип)"
          value="type1"
        />
        <ElOption
          label="БЮДЖЕТ (федеральный, республиканский, местный)"
          value="type2"
        />
      </ElSelect>
    </ElFormItem>
    <ElFormItem required label="Тип заявки" prop="primary.typeReq">
      <ElSelect class="tw-w-full" v-model="fStore.values['primary.typeReq']" placeholder="Выберите тип">
        <ElOption
          label="Заявка на приобретение газа"
          value="type1"
        />
      </ElSelect>
    </ElFormItem>
  </div>
</template>
<script setup lang="ts">
import { ElSelect, ElOption, ElFormItem } from 'element-plus';
import { useFormStore } from '../store/form';

const fStore = useFormStore();

</script>
