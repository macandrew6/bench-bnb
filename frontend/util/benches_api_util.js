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