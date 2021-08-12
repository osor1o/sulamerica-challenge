import moment from "moment";
import { Moment } from "moment";

export interface Date extends Moment {}

export const toDate = (value?: string | Date) => {
  return moment(value);
};
