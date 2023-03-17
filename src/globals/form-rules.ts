import { FormRules } from 'element-plus';

export const requiredRule = { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } as const;
export const numberRule = {
  type: 'string',
  validator: (_rule: any, value: unknown) => {
    if(typeof value === 'string') {
      return isNaN(Number(value)) === false && value[value.length - 1] !== '.';
    }
    return false;
  },
  message: 'Поле должно быть числом', trigger: 'blur'
} as const;

export const dateRule = {
  type: 'date',
  message: 'Поле должно быть датой',
  trigger: 'change'
} as const;

export const phoneNumber = {
  type: 'string',
  pattern: /^\+7 \([0-9]{3}\) [0-9]{3} [0-9]{2} [0-9]{2}$/,
  message: 'Поле должно быть телефоном',
  trigger: 'blur'
} as const;

export const rules: FormRules = {
  'primary.typePerc': [ requiredRule ],
  'primary.typeReq': [ requiredRule ],
  'percData.inn': [ requiredRule ],
  'percData.kpp': [ requiredRule ],
  'percData.egrip': [ requiredRule ],
  'percData.shortname': [ requiredRule ],
  'percData.fullname': [ requiredRule ],
  'percData.city': [ requiredRule ],
  'percData.street': [ requiredRule ],
  'percData.house': [ requiredRule ],
  'percData.flat': [ requiredRule ],
  'percData.phone': [ requiredRule, phoneNumber ],
  'percData.phone2': [ phoneNumber ],
  'percData.email': [
    requiredRule,
    { type: 'email', message: 'Введите корректный email', trigger: ['blur'], }
  ],
  'account.number': [ requiredRule ],
  'account.bik': [ requiredRule ],
  'account.korr': [ requiredRule ],
  'account.name': [ requiredRule ],
  'account.address': [ requiredRule ],
  'gazData.from': [ requiredRule, dateRule ],
  'gazData.yearCapacity': [ requiredRule, numberRule ],
  'clientData.dir': [ requiredRule ],
  'clientData.pos': [ requiredRule ],
  'clientData.phone': [ requiredRule, phoneNumber ],
  'clientData.gazHoz.name': [ requiredRule ],
  'clientData.gazHoz.pos': [ requiredRule ],
  'clientData.gazHoz.phone': [ requiredRule, phoneNumber ],
  'clientData.curator': [ requiredRule ],
  'generalData.plan': [ requiredRule, numberRule ],
  'generalData.currentYear': [ requiredRule, numberRule ],
  'generalData.currentYearSuppose': [ requiredRule, numberRule ],
  'generalData.factLastYear': [ requiredRule, numberRule ],
  'generalData.factDeviation': [ requiredRule, numberRule ],
  'generalData.periodLastYearFrom': [ requiredRule, dateRule ],
  'generalData.periodLastYearTo': [ requiredRule, dateRule ],
  'generalData.count': [ requiredRule, numberRule ],
  'generalData.reason': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'change' } ],
  'generalData.reasonText': [ requiredRule ],
  'generalData.financeCurrentYear': [ requiredRule, numberRule ],
  'generalData.costCurrentYear': [ requiredRule, numberRule ],
  'energyNas.fuelReduce': [ requiredRule, numberRule ],
  'energyNas.gasSrc': [ requiredRule, numberRule ],
  'energyNas.total': [ requiredRule, numberRule ],
  'energyNas.tcj': [ requiredRule, numberRule ],
  'energyNas.budget': [ requiredRule, numberRule ],
  'energyNas.otherProd': [ requiredRule, numberRule ],
  'energyNas.energyPerc': [ requiredRule, numberRule ],
  'energyNas.src': [ requiredRule ],
  'energyTco.totalItems': [ requiredRule, numberRule ],
  'energyTco.srcDataSt9': [ requiredRule ],
  'energyTco.energyTotal': [ requiredRule, numberRule ],
  'energyTco.srcDataSt11': [ requiredRule ],
  'energyTco.gasPercProd': [ requiredRule, numberRule ],
  'energyTco.gasPercNas': [ requiredRule, numberRule ],
  'energyTco.condition': [ requiredRule, numberRule ],
};
