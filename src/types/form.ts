import type { DateModelType } from 'element-plus';

export interface Eq {
  id: number,
  name: string,
  count: string,
  max: string,
  passport: FileId | null
}

export interface Mesm {
  id: number
  number: string,
  name: string,
  from: string,
  to: string,
  passport: FileId | null,
}

export type GasPoint = {
  id: number,
  jan: number,
  feb: number,
  mar: number,
  apr: number,
  may: number,
  jun: number,
  jul: number,
  aug: number,
  sep: number,
  okt: number,
  nov: number,
  dec: number,
}

export interface FileId {
  id: number
}

export interface Values {
  'primary.typePerc': string,
  'primary.typeReq': string,
  'percData.inn': string,
  'percData.kpp': string,
  'percData.egrip': string,
  'percData.shortname': string,
  'percData.fullname': string,
  'percData.phone': string,
  'percData.phone2': string,
  'percData.fax': string,
  'percData.email': string,
  'account.number': string,
  'account.bik': string,
  'account.korr': string,
  'account.name': string,
  'account.address': string,
  'gazData.from': string,
  'gazData.yearCapacity': string,
  'gazData.equipment': Eq[],
  'gazData.equipmentMesm': Mesm[],
  'gazPoints': GasPoint[],
  'clientData.dir': string,
  'clientData.pos': string,
  'clientData.phone': string,
  'clientData.gazHoz.name': string,
  'clientData.gazHoz.pos': string,
  'clientData.gazHoz.phone': string,
  'clientData.curator': string,
  'generalData.plan': string,
  'generalData.currentYear': string,
  'generalData.currentYearSuppose': string,
  'generalData.factLastYear': string,
  'generalData.factDeviation': string,
  'generalData.periodLastYear': [DateModelType, DateModelType] | undefined,
  'generalData.count': string,
  'generalData.reason': string,
  'generalData.financeCurrentYear': string,
  'generalData.costCurrentYear': string,
  'energyNas.fuelReduce': string,
  'energyNas.gasSrc': string,
  'energyNas.total': string,
  'energyNas.tcj': string,
  'energyNas.budget': string,
  'energyNas.otherProd': string,
  'energyNas.energyPerc': string,
  'energyNas.src': string,
  'energyTco.totalItems': string,
  'energyTco.srcDataSt9': string,
  'energyTco.energyTotal': string,
  'energyTco.srcDataSt11': string,
  'energyTco.gasPercProd': string,
  'energyTco.gasPercNas': string,
  'energyTco.condition': string,
  'comment': string,
  'attachments': FileId[] | null
  'files.tep': FileId[] | null,
  'files.jkh': FileId[] | null,
  'files.tco': FileId[] | null,
  'files.gio': FileId[] | null,
  'files.aboutDir': FileId[] | null,
  'files.financeBudget': FileId[] | null,
  'files.contractCopies': FileId[] | null,
}
