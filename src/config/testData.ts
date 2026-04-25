export const testUsers = {
  validUser: {
    name: 'Test User',
    email: 'test.user@testmail.com',
    password: 'TestPassword123',
    firstName: 'Test',
    lastName: 'User',
    company: 'Test Company',
    address1: '123 Test Street',
    address2: 'Apt 456',
    state: 'California',
    city: 'San Francisco',
    zipcode: '94105',
    country: 'United States',
    phone: '5555551234',
  },
  invalidUser: {
    email: 'invalid@email.com',
    password: 'wrongpassword',
  },
};

export const testProducts = {
  searchTerm: 'dress',
  invalidSearch: 'invalidproduct123',
};

export const testMessages = {
  contactForm: {
    name: 'Test Automation User',
    email: 'automation@test.com',
    subject: 'Test Automation Subject',
    message: 'This is a test message from automation script.',
  },
};