import { BookingInterface } from 'interfaces/booking';
import { MaintenanceInterface } from 'interfaces/maintenance';
import { ReviewInterface } from 'interfaces/review';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  mileage: number;
  license_plate: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  maintenance?: MaintenanceInterface[];
  review?: ReviewInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    maintenance?: number;
    review?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  company_id?: string;
}
