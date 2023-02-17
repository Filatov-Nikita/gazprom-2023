<template>
  <div>
    <div class="fieldset-label">
      К заявке прилагаются следующие документы
    </div>
    <div>
      <FieldsetFilesType1 v-if="fStore.isType1" />
      <FieldsetFilesType2 v-else-if="fStore.isType2" />
      <ElFormItem class="comment" label="Комментарий" prop="comment">
        <el-input
        v-model="fStore.values.comment"
        :rows="6"
        type="textarea"
        />
      </ElFormItem>
      <div class="upload-label">
        Вложения
      </div>
      <ElUpload
        class="tw-mb-4"
        :auto-upload="false"
        :limit="3"
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
  </div>
</template>
<script setup lang="ts">
import { ElUpload, ElButton, ElDialog, ElImage, ElInput, ElFormItem } from 'element-plus';
import FieldsetFilesType1 from './FieldsetFilesType1.vue';
import FieldsetFilesType2 from './FieldsetFilesType2.vue';
import { useFormStore } from '../store/form';
import { ref } from 'vue';
const fStore = useFormStore();
const showDialod = ref(false);
</script>
<style>
.comment {
  display: block !important;
  max-width: 500px;
}
</style>
