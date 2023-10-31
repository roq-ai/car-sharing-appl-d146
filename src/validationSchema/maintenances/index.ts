import * as yup from 'yup';

export const maintenanceValidationSchema = yup.object().shape({
  type: yup.string().required(),
  date: yup.date().required(),
  description: yup.string().nullable(),
  car_id: yup.string().nullable().required(),
});
