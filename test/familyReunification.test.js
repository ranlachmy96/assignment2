const request = require('supertest');
const app = require('../index');
require('dotenv').config();
const familyReunificationRepository = require('../repositories/familyReunification.repository');
const { PropertyNotFound, EntityNotFound } = require('../errors/404.errors');
const { PropertyExists, BodyNotSent } = require('../errors/400.errors');
const { ServerError } = require('../errors/500.errors');

jest.mock('../repositories/familyReunification.repository');

describe('GET /familyReunification', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    console.log(familyReunificationRepository); // Log to check the structure
  });

  // Success 200
  it('should return all reunification cases', async () => {
    const mockfamilyReunification = [
      {
        _id: 1,
        parents: ['Alice Brown', 'Bob Brown'],
        children: ['Emma Brown', 'Noah Brown'],
        active: true,
        reunion_date: '2024-02-01',
        reunion_location: 'City Park',
        __v: 0,
      },
    ];

    familyReunificationRepository.mockResolvedValue(mockfamilyReunification);
    const res = await request(app).get('/familyReunification');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockfamilyReunification);
  });
});
