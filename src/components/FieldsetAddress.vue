<template>
  <div>
    <ElFormItem label="Город" prop="percData.city">
      <ElAutocomplete
        class="tw-w-full"
        v-model="values.city"
        :fetch-suggestions="searchCity"
        placeholder="Город"
        @select="handleSelectCity"
      />
    </ElFormItem>
    <ElFormItem label="Улица" prop="percData.street">
      <ElAutocomplete
        class="tw-w-full"
        v-model="values.street"
        :fetch-suggestions="searchStreet"
        placeholder="Улица"
        @select="handleSelectStreet"
      />
    </ElFormItem>
    <ElFormItem label="Дом" prop="percData.house">
      <ElAutocomplete
        class="tw-w-full"
        v-model="values.house"
        :fetch-suggestions="searchHouse"
        placeholder="Дом"
        @select="handleSelectHouse"
      />
    </ElFormItem>
    <ElFormItem label="Квартира" prop="percData.flat">
      <ElInput v-model="values.flat" placeholder="Квартира" />
    </ElFormItem>
  </div>
</template>
<script setup lang="ts">
import { ElAutocomplete, ElFormItem, ElInput } from 'element-plus';
import { reactive, watch } from 'vue';
import { show } from '../api/dadata';
import type { Item } from '../types/dadata';
import { useFormStore } from '../store/form';

const fStore = useFormStore();

interface Resp {
  city: Item | null,
  street: Item | null,
  house: Item | null,
  flat: Item | null
}

const values = reactive({
  city: '',
  street: '',
  house: '',
  flat: ''
});

watch(() => values.city, (newVal) => fStore.values['percData.city'] = newVal, { immediate: true });
watch(() => values.street, (newVal) => fStore.values['percData.street'] = newVal, { immediate: true });
watch(() => values.house, (newVal) => fStore.values['percData.house'] = newVal, { immediate: true });
watch(() => values.flat, (newVal) => fStore.values['percData.flat'] = newVal, { immediate: true });

const responses: Resp = reactive({
  city: null,
  street: null,
  house: null,
  flat: null
});

const region_fias_id = '6f2cbfd8-692a-4ee4-9b16-067210bde3fc';

async function searchCity(query: string, cb: any) {
  if(query === '') return [];
  const result = await show({
    query,
    count: 2,
    restrict_value: true,
    form_bound: { value: 'city' },
    to_bound: { value: 'settlement' },
    locations: [{ region_fias_id }]
  });

  return result
}

async function searchStreet(query: string, cb: any) {
  if(query === '') return [];
  const location: Record<string, unknown> = {};

  if(responses.city) {
    location.city_fias_id = responses.city.data.city_fias_id
  } else {
    location.region_fias_id = region_fias_id;
  }

  const result = await show({
    query,
    count: 2,
    restrict_value: true,
    form_bound: { value: 'street' },
    to_bound: { value: 'street' },
    locations: [location]
  });

  return result
}

async function searchHouse(query: string, cb: any) {
  if(query === '') return [];
  const location: Record<string, unknown> = {};

  if(responses.street === null) return [];
  else {
    location.street_fias_id = responses.street.data.street_fias_id
  }

  const result = await show({
    query,
    count: 2,
    restrict_value: true,
    form_bound: { value: 'house' },
    to_bound: { value: 'house' },
    locations: [location]
  });

  return result
}

function handleSelectCity(item: unknown) {
  const innerItem = item as Item;
  values.city = (innerItem.data.settlement_with_type || innerItem.data.city_with_type) as string;
  responses.city = innerItem;
}

function handleSelectStreet(item: unknown) {
  const innerItem = item as Item;
  responses.street = innerItem;
  values.city = (innerItem.data.settlement_with_type || innerItem.data.city_with_type) as string;
}

function handleSelectHouse(item: unknown) {
  const innerItem = item as Item;
  responses.house = innerItem;
}
</script>
