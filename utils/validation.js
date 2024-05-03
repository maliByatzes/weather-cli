
export function validateLat(latitude) {
  if (isNaN(latitude)) {
    return 'The provided value is not a number!';
  }
  if (latitude < -90 || latitude > 90) {
    return 'The provided value is out of range.(value must be between -90 and 90)';
  }
  if (latitude === '') {
    return 'The value cannot be empty!';
  }
  return true;
}

export function validateLong(longitude) {
  if (isNaN(longitude)) {
    return 'The provided value is not a number!';
  }
  if (longitude < -180 || longitude > 180) {
    return 'The provided value is out of range.(value must be between -180 and 180)';
  }
  if (longitude === '') {
    return 'The value cannot be empty!';
  }
  return true;
}
