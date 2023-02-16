import { FormRules } from 'element-plus';

export const rules: FormRules = {
  'primary.typePerc': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'primary.typeReq': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.inn': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.kpp': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.egrip': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.shortname': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.fullname': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.phone': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'percData.email': [
    { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' },
    { type: 'email', message: 'Введите корректный email', trigger: ['blur'], }
  ],
  'account.number': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'account.bik': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'account.korr': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'account.name': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'account.address': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'gazData.from': [ { type: 'date', required: true, message: 'Поле должно быть датой', trigger: 'change' } ],
  'gazData.yearCapacity': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.dir': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.pos': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.phone': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.gazHoz.name': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.gazHoz.pos': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.gazHoz.phone': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
  'clientData.curator': [ { required: true, message: 'Поле должно быть заполнено', trigger: 'blur' } ],
};
