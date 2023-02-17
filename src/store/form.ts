import { defineStore } from 'pinia';
import { reactive, computed } from 'vue';
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
    'percData.city': '',
    'percData.street': '',
    'percData.house': '',
    'percData.flat': '',
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
    'generalData.plan': '',
    'generalData.currentYear': '',
    'generalData.currentYearSuppose': '',
    'generalData.factLastYear': '',
    'generalData.factDeviation': '',
    'generalData.periodLastYear': undefined,
    'generalData.count': '',
    'generalData.reason': '',
    'generalData.financeCurrentYear': '',
    'generalData.costCurrentYear': '',
    'energyNas.fuelReduce': '',
    'energyNas.gasSrc': '',
    'energyNas.total': '',
    'energyNas.tcj': '',
    'energyNas.budget': '',
    'energyNas.otherProd': '',
    'energyNas.energyPerc': '',
    'energyNas.src': '',
    'energyTco.totalItems': '',
    'energyTco.srcDataSt9': '',
    'energyTco.energyTotal': '',
    'energyTco.srcDataSt11': '',
    'energyTco.gasPercProd': '',
    'energyTco.gasPercNas': '',
    'energyTco.condition': '',
    'comment': '',
    'attachments': null,
    'files.tep': null,
    'files.jkh': null,
    'files.tco': null,
    'files.gio': null,
    'files.aboutDir': null,
    'files.financeBudget': null,
    'files.contractCopies': null,
  });

  const isType1 = computed(() => {
    return values['primary.typePerc'] === 'type1'
  });

  const isType2 = computed(() => {
    return values['primary.typePerc'] === 'type2'
  });

  return {
    values,
    isType1,
    isType2
  }
});
