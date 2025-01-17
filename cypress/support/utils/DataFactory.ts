import { faker } from '@faker-js/faker';
import { UserData } from '../../types';

class DataFactory {
  static generateUserData(): UserData {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    return {
      name: firstName,
      email: faker.internet.email(),
      password: faker.internet.password(),
      dateOfBirth: {
        day: faker.number.int({ min: 1, max: 28 }),
        month: faker.date.month(),
        year: faker.number.int({ min: 1970, max: 2000 }),
      },
      newsletter: faker.datatype.boolean(),
      specialOffers: faker.datatype.boolean(),
      address: {
        firstName: firstName,
        lastName: lastName,
        company: faker.company.name(),
        address1: faker.location.streetAddress(),
        address2: `apt no: ${faker.number.int({ min: 1000, max: 9999 })}`,
        country: 'United States',
        state: faker.location.state(),
        city: faker.location.city(),
        zipcode: faker.location.zipCode(),
        mobileNumber: faker.phone.number(),
      },
    };
  }

  static generateCustomUser(overrides: Partial<UserData>): UserData {
    return {
      ...this.generateUserData(),
      ...overrides,
    };
  }
}

export default DataFactory;
