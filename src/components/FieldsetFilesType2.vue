<template>
  <div>
    <!-- @change="onChange($event, index)"
    @remove="fStore.values['gazData.equipmentMesm'][index].passport = null" -->
    <div class="upload-label">
      Документы, подтверждающие финансирование расходов бюджетных организаций на&nbsp;оплату газа в&nbsp;текущем
      году (смета расходов и&nbsp;доходов, уведомление о&nbsp;бюджетных ассигнованиях и&nbsp;лимитах бюджетных
      обязательств, расходное расписание по&nbsp;бюджетной организации или&nbsp;выписка из&nbsp;указанных документов)
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
      Копии действующих договоров (государственных контрактов) поставки газа на&nbsp;текущий год, включая дополнительные соглашения к&nbsp;ним:
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
</template>
<script setup lang="ts">
import { ElUpload, ElButton } from 'element-plus';
import { useFormStore } from '../store/form';
import { ref } from 'vue';
const fStore = useFormStore();
</script>
