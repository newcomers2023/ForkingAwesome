import { Gender } from "../enums/gender.enum";
import { martialStatus } from "../enums/martialStatus.enum";

export interface Customer {
    firstName: string;
    lastName: string;
    zipCode: number;
    street: string;
    houseNumber: string;
    hasChildren: boolean;
    gender: Gender;
    martialStatur: martialStatus;
  }