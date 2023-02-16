import type { UploadFile } from 'element-plus';

export interface Eq {
  id: number,
  name: string,
  count: string,
  max: string,
  passport: UploadFile | null
}

export interface Mesm {
  id: number
  number: string,
  name: string,
  from: string,
  to: string,
  passport: UploadFile | null,
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
  'gazPoints': GasPoint[]
}
