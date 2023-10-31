interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage your personal information',
    'Book a car',
    'Write a review for a car',
    'View car and company information',
  ],
  ownerAbilities: ['Manage users', 'Manage companies', 'Manage cars', 'Manage bookings'],
  getQuoteUrl: 'https://app.roq.ai/proposal/a507c502-a4cf-40b4-aa1e-231cae50be46',
};
