<template>
  <div class="tw-pt-4">
    <div class="table-label">
      Газоиспользующее оборудование
    </div>

    <table class="app-table">
      <thead>
        <tr>
          <th class="app-table__th">* Наименование</th>
          <th class="app-table__th">* Количество</th>
          <th class="app-table__th tw-w-[285px]">* Максимальный расход газа, м3/ч</th>
          <th class="app-table__th">* Паспорт</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in fStore.values['gazData.equipment']" :key="item.id">
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'name')"
              :rules="requireRule"
            >
              <ElInput v-model="fStore.values['gazData.equipment'][index].name" />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'number')"
              :rules="requireRule"
            >
              <ElInput v-model="fStore.values['gazData.equipment'][index].count" />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'number')"
              :rules="requireRule"
            >
              <ElInput v-model="fStore.values['gazData.equipment'][index].max" />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElUpload accept="application/pdf" class="upload-demo" :auto-upload="false" :limit="1" @change="onChange($event, index)">
              <div>
                <el-button type="primary">Загрузить</el-button>
              </div>
            </ElUpload>
          </td>
          <td class="app-table__td t">
            <ElButton type="danger" @click="removeRow(index)" :disabled="!canRemove">
              Удалить
            </ElButton>
          </td>
        </tr>
      </tbody>
    </table>

    <ElButton class="tw-mt-2" type="primary" @click="appendRow">
      Добавить
    </ElButton>
  </div>
</template>
<script setup lang="ts">
import { ElButton, ElInput, ElFormItem, ElUpload, type UploadFile } from 'element-plus';
import { useFormStore } from '../store/form';
import { computed } from 'vue';

const fStore = useFormStore();

const requireRule = {
  required: true,
  message: 'Обязательное поле',
  trigger: 'blur',
} as const;

const dateRule = {
  type: 'date',
  required: true,
  message: 'Поле должно быть датой',
  trigger: 'change'
} as const;

function makeProp(index: number, prop: string) {
  return ['gazData.equipment', index.toString(), prop];
}

const canRemove = computed(() => fStore.values['gazData.equipment'].length > 1);

function appendRow() {
  fStore.values['gazData.equipment'].push({
    id: Date.now(),
    name: '',
    count: '',
    max: '',
    passport: null,
  });
}

function removeRow(index: number) {
  fStore.values['gazData.equipment'].splice(index, 1);
}

function onChange(e: UploadFile, index: number) {
  console.log(e);
  fStore.values['gazData.equipment'][index].passport = e;
}
</script>
