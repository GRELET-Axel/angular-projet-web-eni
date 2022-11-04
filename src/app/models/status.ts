export interface StatusI {
  statusId?: number,
  name: string
}

export class Status {
  static readonly OPEN: StatusI = { statusId: 1, name: "Ouverte" };
  static readonly CLOSED: StatusI = { statusId: 2, name: "Clôturée" };
  static readonly ON_GOING: StatusI = { statusId: 3, name: "Activitée en cours" };
  static readonly PASSED: StatusI = { statusId: 4, name: "Passée" };
  static readonly CANCELED: StatusI = { statusId: 5, name: "Annulée" };
  static readonly IN_CREATION: StatusI = { statusId: 6, name: "Création en cours" };
}

export const status = [
  Status.OPEN,
  Status.CLOSED,
  Status.ON_GOING,
  Status.PASSED,
  Status.CANCELED,
  Status.IN_CREATION
]
