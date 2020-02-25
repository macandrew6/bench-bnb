import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = filters => dispatch => {
  console.log(filters);
  return (
    BenchesAPIUtil.fetchBenches(filters)
      .then((benches) => dispatch(receiveBenches(benches)))
  );
};