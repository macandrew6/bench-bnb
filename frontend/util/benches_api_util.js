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

export const createBench = bench => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/benches',
      data: bench
    })
  );
};