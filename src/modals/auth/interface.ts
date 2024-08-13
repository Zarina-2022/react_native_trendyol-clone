// login
export interface LoginParams {
    username: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
  }

// users
export interface Geolocation {
  lat: string;
  long: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
  image?: string;
}

export interface GetUserInfoParams {
  userId: number;
}
