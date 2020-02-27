export const fetchBenches = data => {
  console.log(data);
  return (
    $.ajax({
      method: 'GET',
      url: '/api/benches',
      data,
      error: (err) => console.log(err)
    })
  );
};