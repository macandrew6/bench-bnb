export const fetchBenches = data => {
  return (
    $.ajax({
      method: 'GET',
      url: '/api/benches',
      data,
      error: (err) => console.log(err)
    })
  );
};

export const fetchBench = id => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/benches/${id}`
    })
  );
};

export const createReview = review => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/reviews',
      data: {
        review
      }
    })
  );
};

export const createBench = bench => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/benches',
      data: bench,
      contentType: false,
      processData: false
    })
  );
};