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

export const createBench = bench => {
  console.log(bench);
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