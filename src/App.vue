<template>
<ElConfigProvider :locale="RULocale">
  <ElContainer>
    <ElMain>
      <ElForm
        :model="fStore.values"
        :rules="rules"
        ref="formRef"
        label-position="left"
        label-width="350px"
        class="tw-max-w-[1280px]"
        scroll-to-error
      >
        <div class="fields-wrapper">
          <FieldsetPrimary />
          <ElDivider class="divider" />
          <FieldsetPercData />
          <ElDivider class="divider" />
          <FieldsetAccount />
          <ElDivider class="divider" />
        </div>
        <FieldsetGasData />
        <div class="fields-wrapper">
          <FieldsetClientData />
        </div>
        <ElButton class="tw-mt-8" size="large" @click="submitForm(formRef)">
          Отправить
        </ElButton>
      </ElForm>
    </ElMain>
  </ElContainer>
</ElConfigProvider>
</template>
<script setup lang="ts">
import { ElContainer, ElMain, ElButton, ElDivider, FormInstance, ElConfigProvider } from 'element-plus';
import FieldsetPrimary from './components/FieldsetPrimary.vue';
import FieldsetPercData from './components/FieldsetPercData.vue';
import FieldsetAccount from './components/FieldsetAccount.vue';
import FieldsetGasData from './components/FieldsetGasData.vue';
import FieldsetClientData from './components/FieldsetClientData.vue';
import { ref } from 'vue';
import { rules } from './globals/form-rules';
import { useFormStore } from './store/form';
//@ts-ignore
import RULocale from 'element-plus/dist/locale/ru.mjs';

const fStore = useFormStore();
const formRef = ref<FormInstance>();

async function submitForm(form: FormInstance | undefined) {
  if(!form) return;
  const res = await form.validate(() => {});
  if(res) {
    console.log('success');
  }
}
</script>
