import { request, instance } from '../components/request';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(instance);

const responseMocks = {
  success: {
    users: [{ id: 1, name: 'John Smith' }],
  },
  error404: 'Server Not Found',
  error500: 'Internal Server Error',
  upload: 'upload success',
  successQuery: [{ id: 2, price: 100, name: 'shorts' }],
  timeout: 'Request Timeout',
};

mock.onGet('/next?q=error').reply(200, responseMocks.success);
mock.onGet('/error404').reply(404, responseMocks.error404);
mock.onGet('/error500').reply(500, responseMocks.error500);
mock.onPost('/file').reply(204, responseMocks.upload);
mock.onGet('/withquery?price=100').reply(200, responseMocks.successQuery);
mock.onGet('/timedout').reply(408, responseMocks.timeout);

describe('request function', () => {
  it('makes a valid get request to /next?q=error', async () => {
    const response = await request('/next?q=error');
    expect(response).toEqual(responseMocks.success);
  });

  it('handles error with status 404', async () => {
    try {
      const response = await request('/error404');
    } catch (err) {
      expect(err.status).toEqual(404);
      expect(err.data).toEqual(responseMocks.error404);
    }
  });

  it('handles error with status 500', async () => {
    try {
      const response = await request('/error500');
    } catch (err) {
      expect(err.status).toEqual(500);
      expect(err.data).toEqual(responseMocks.error500);
    }
  });

  it('makes a valid post request on /file', async () => {
    function mockFile({
      name = 'file.txt',
      size,
      type,
      lastModified = new Date(),
    }) {
      const blob = new Blob(['a'.repeat(size)], { type });

      blob.lastModifiedDate = lastModified;

      return new File([blob], name);
    }

    const testFile = mockFile({
      type: 'image/png',
      size: 50000,
    });

    const formData = new FormData();

    formData.append('file', testFile);
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };

    const response = await request('/file', config);
    expect(response).toEqual(responseMocks.upload);
  });

  it('creates a proper query string', async () => {
    const config = {
      query: {
        price: 100,
      },
    };
    const response = await request('/withquery', config);
    expect(response).toEqual(responseMocks.successQuery);
  });

  it('handles timeout error', async () => {
    try {
      const response = await request('/timedout');
    } catch (err) {
      expect(err.status).toEqual(408);
      expect(err.data).toEqual(responseMocks.timeout);
    }
  });
});
