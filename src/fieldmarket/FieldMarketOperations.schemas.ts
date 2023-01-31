export class Outlet {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public banners: string[],
    public festoons: string[]
  ) {}
}

export class Asset {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public type: string,
    public campaignId?: number
  ) {}
}

export class Campaign {
  constructor(
    public id: number,
    public name: string,
    public product: string,
    public startDate: Date,
    public endDate: Date
  ) {}
}

export class Competition {
  constructor(
    public id: number,
    public name: string,
    public presence: string,
    public outletId: number
  ) {}
}

export class Report {
  constructor(
    public assetId: number,
    public outletId: number,
    public date: Date,
    public notes: string
  ) {}
}
