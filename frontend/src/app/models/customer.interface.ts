import { Gender } from "../enums/gender.enum";
import { martialStatus } from "../enums/martialStatus.enum";

export interface Customer {
    name: string;
    birthdate: Date;
    zipCode: number;
    street: string;
    houseNumber: string;
    hasChildren: boolean;
    gender: Gender;
    martialStatur: martialStatus;
  }