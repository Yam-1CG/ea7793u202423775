export interface Reservation {
  id: number;
  adventureCampId:number;
  activityType: string;
  participantName: string;
  participants: number;
  weatherTemperature: number;
  reserveAt:string;
}
