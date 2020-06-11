function validate(qry) {
  if (
    (typeof qry === 'number' && Number.isInteger(qry)) ||
    Array.isArray(qry)
  ) {
    return `/${qry}`;
  }

  if (typeof qry === 'object') {
    const queryParams = Object.entries(qry)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join('&');

    return `/?${queryParams}`;
  }

  throw new Error(
    'As argument use an object, an array, an integer or leave it blank.'
  );
}

exports.validate = validate;
