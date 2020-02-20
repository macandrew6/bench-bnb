export const fetchBenches = data => (
  $.ajax({
    method: 'GET',
    url: '/api/benches',
    data,
    error: (err) => console.log(err)
  })
);