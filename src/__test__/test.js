import ErrorRepository from '../js/ErrorRepo';

let errorRepo;

beforeEach(() => {
  errorRepo = new ErrorRepository();
});

test('should add and translate error codes', () => {
  errorRepo.addError(404, 'Not Found');
  errorRepo.addError(500, 'Internal Server Error');

  expect(errorRepo.translate(404)).toBe('Not Found');
  expect(errorRepo.translate(500)).toBe('Internal Server Error');
});

test('should return "Unknown error" for non-existent error code', () => {
  expect(errorRepo.translate(123)).toBe('Unknown error');
});

test('should allow adding multiple errors', () => {
  errorRepo.addError(403, 'Forbidden');
  errorRepo.addError(401, 'Unauthorized');

  expect(errorRepo.translate(403)).toBe('Forbidden');
  expect(errorRepo.translate(401)).toBe('Unauthorized');
});
