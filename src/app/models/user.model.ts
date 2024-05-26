export interface User {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    userType: 'seller' | 'buyer';
  }