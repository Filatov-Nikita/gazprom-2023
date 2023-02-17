<template>
  <div>
    <!-- @change="onChange($event, index)"
    @remove="fStore.values['gazData.equipmentMesm'][index].passport = null" -->
    <div class="upload-label">
      №1-ТЕП (с отметкой территориального органа Росстата)
    </div>
    <ElUpload
      class="tw-mb-4"
      :auto-upload="false"
      accept="application/pdf"
      :limit="1"
    >
      <template #trigger>
        <el-button type="primary">Загрузить</el-button>
      </template>
    </ElUpload>
    <div class="upload-label">
      №22-ЖКХ (с отметкой территориального органа Росстата)
    </div>
    <ElUpload
      class="tw-mb-4"
      :auto-upload="false"
      accept="application/pdf"
      :limit="1"
    >
      <template #trigger>
        <el-button type="primary">Загрузить</el-button>
      </template>
    </ElUpload>
    <div class="upload-label">
      Справка подтверждения основного вида экономической деятельности ТСО
    </div>
    <div class="tw-flex tw-space-x-4">
      <el-button @click="showDialod = true">Образец</el-button>
      <ElUpload
        class="tw-mb-4"
        :auto-upload="false"
        accept="application/pdf"
        :limit="1"
      >
        <template #trigger>
          <el-button type="primary">Загрузить</el-button>
        </template>
      </ElUpload>
    </div>
    <div class="upload-label">
      Паспорт ГИО (в случае изменения ГИО)
    </div>
    <ElUpload
      class="tw-mb-4"
      :auto-upload="false"
      accept="application/pdf"
      :limit="1"
    >
      <template #trigger>
        <el-button type="primary">Загрузить</el-button>
      </template>
    </ElUpload>
    <div class="upload-label">
      О смене руководителя (в случае руководителя)
    </div>
    <ElUpload
      class="tw-mb-4"
      :auto-upload="false"
      accept="application/pdf"
      :limit="1"
    >
      <template #trigger>
        <el-button type="primary">Загрузить</el-button>
      </template>
    </ElUpload>
  </div>
  <el-dialog
    v-model="showDialod"
    title="Образец"
    width="80%"
  >
    <div class="tw-text-center">
      <el-image class="tw-max-w-[500px]" src="/example.png"  />
    </div>
  </el-dialog>
</template>
<script setup lang="ts">
import { ElUpload, ElButton, ElDialog, ElImage } from 'element-plus';
import { useFormStore } from '../store/form';
import { ref } from 'vue';
const fStore = useFormStore();
const showDialod = ref(false);
</script>
