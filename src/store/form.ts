import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { Values } from '../types/form';

export const useFormStore = defineStore('formStore', () => {
  const values = reactive<Values>({
    'primary.typePerc': '',
    'primary.typeReq': '',
    'percData.inn': '',
    'percData.kpp': '',
    'percData.egrip': '',
    'percData.shortname': '',
    'percData.fullname': '',
    'percData.phone': '',
    'percData.phone2': '',
    'percData.fax': '',
    'percData.email': '',
    'account.number': '',
    'account.bik': '',
    'account.korr': '',
    'account.name': '',
    'account.address': '',
    'gazData.from': '',
    'gazData.yearCapacity': '',
    'gazData.equipment': [
      {
        id: Date.now(),
        name: '',
        count: '',
        max: '',
        passport: null
      }
    ],
    'gazData.equipmentMesm': [
      {
        id: Date.now(),
        number: '',
        name: '',
        from: '',
        to: '',
        passport: null,
      }
    ],
    'gazPoints': [
      {
        id: Date.now(),
        jan: 0,
        feb: 0,
        mar: 0,
        apr: 0,
        may: 0,
        jun: 0,
        jul: 0,
        aug: 0,
        sep: 0,
        okt: 0,
        nov: 0,
        dec: 0
      }
    ],
    'clientData.dir': '',
    'clientData.pos': '',
    'clientData.phone': '',
    'clientData.gazHoz.name': '',
    'clientData.gazHoz.pos': '',
    'clientData.gazHoz.phone': '',
    'clientData.curator': '',
  });

  return {
    values,
  }
});
