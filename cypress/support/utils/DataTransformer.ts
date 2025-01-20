import { UserData } from '../../types';
import { CreateUserRequest } from '../../types/api.types';

export class DataTransformer {
  public static transformToCreateUserDataApi(
    userData: UserData
  ): CreateUserRequest {
    return {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      title: 'Mr',
      birth_date: userData.dateOfBirth.day,
      birth_month: userData.dateOfBirth.month,
      birth_year: userData.dateOfBirth.year,
      firstname: userData.address.firstName,
      lastname: userData.address.lastName,
      company: userData.address.company,
      address1: userData.address.address1,
      address2: userData.address.address2,
      country: userData.address.country,
      state: userData.address.state,
      city: userData.address.city,
      zipcode: userData.address.zipcode,
      mobile_number: userData.address.mobileNumber,
    };
  }
}
