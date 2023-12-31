import ShiftStatus from "./ShiftStatus"

interface QuinyxSchedule {
  id: number,
  type: number,
  status: ShiftStatus,
  startDate: string,
  endDate: string,
  categoryName: string,
  categoryId: number,
  description: string,
  grabbAble: boolean,
  freeDay: boolean,
  breakType: number,
  breaks: {
    start: string,
    end: string,
  }[],
  isBookedByMe: boolean,
  isPartOfMySwapRequest: boolean,
  isPartOfSwap: boolean,
  crmScheduleId: number,
  categoryDecisionTypeIds: [],
  unit: {
    id: number,
    name: string,
    districtId: number,
    noBreaks: number,
    anonymousShifts: number,
    allowSwap: boolean,
    requirePunchOutInsideGeofence: boolean,
    coordinates: [],
  },
  section: null,
  employee: {
    id: number,
    givenName: string,
    familyName: string,
    pictureURL: string,
    sectionId: null,
    districtId: null,
    unitId: number,
  },
  agreement: {
    id: number,
    name: string,
    employeeId: number,
    weekStart: number,
    dayBreakRest: string,
    minimumAvailabilityHoursPerWeek: number,
    isMainAgreement: boolean,
  },
  crmOrder: null,
  crmCustomer: null,
  tasks: [],
  tags: null,
  costCentre: {
    id: number,
    ttext: string,
    restId: number,
  },
  project: null,
}

export default QuinyxSchedule;
