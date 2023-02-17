<template>
  <div class="tw-pt-4">
    <div class="table-label">
      Измерительное оборудование
    </div>

    <table class="app-table">
      <thead>
        <tr>
          <th class="app-table__th">* Наименование</th>
          <th class="app-table__th">* Номер</th>
          <th class="app-table__th">* Дата проверки</th>
          <th class="app-table__th">* Срок проверки</th>
          <th class="app-table__th">* Паспорт</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item, index in fStore.values['gazData.equipmentMesm']" :key="item.id">
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'name')"
              :rules="requiredRule"
            >
              <ElInput v-model="fStore.values['gazData.equipmentMesm'][index].name" />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'number')"
              :rules="[requiredRule, numberRule]"
            >
              <ElInput v-model="fStore.values['gazData.equipmentMesm'][index].number" />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'from')"
              :rules="[requiredRule, dateRule]"
            >
              <ElDatePicker
                v-model="fStore.values['gazData.equipmentMesm'][index].from"
                type="date"
                format="DD.MM.YYYY"
                value-format="YYYY-MM-DD"
              />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElFormItem
              label-width="0px"
              :prop="makeProp(index, 'to')"
              :rules="[requiredRule, dateRule]"
            >
              <ElDatePicker
                v-model="fStore.values['gazData.equipmentMesm'][index].to"
                type="date"
                format="DD.MM.YYYY"
                value-format="YYYY-MM-DD"
              />
            </ElFormItem>
          </td>
          <td class="app-table__td">
            <ElUpload
              class="upload-demo"
              :auto-upload="false"
              accept="image/png,image/jpeg"
              :limit="1"
              @change="onChange($event, index)"
              @remove="fStore.values['gazData.equipmentMesm'][index].passport = null"
            >
              <template #trigger>
                <el-button type="primary">Загрузить</el-button>
              </template>
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
import { ElButton, ElInput, ElFormItem, ElDatePicker, ElUpload, type UploadFile} from 'element-plus';
import { useFormStore } from '../store/form';
import { computed } from 'vue';
import { requiredRule, dateRule, numberRule } from '../globals/form-rules';

const fStore = useFormStore();

function makeProp(index: number, prop: string) {
  return ['gazData.equipmentMesm', index.toString(), prop];
}

const canRemove = computed(() => fStore.values['gazData.equipmentMesm'].length > 1);

function appendRow() {
  fStore.values['gazData.equipmentMesm'].push({
    id: Date.now(),
    name: '',
    number: '',
    from: '',
    to: '',
    passport: null,
  });
}

function removeRow(index: number) {
  fStore.values['gazData.equipmentMesm'].splice(index, 1);
}

function onChange(e: UploadFile, index: number) {
  console.log(e);
  // fStore.values['gazData.equipmentMesm'][index].passport = e;
}
</script>
