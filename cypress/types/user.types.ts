export interface LoginData {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: number;
    month: string;
    year: number;
  };
  newsletter: boolean;
  specialOffers: boolean;
  address: {
    firstName: string;
    lastName: string;
    company: string;
    address1: string;
    address2: string;
    country: string;
    state: string;
    city: string;
    zipcode: string;
    mobileNumber: string;
  };
}
