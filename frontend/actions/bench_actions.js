import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const fetchBenches = filters => dispatch => {
  return (
    BenchesAPIUtil.fetchBenches(filters)
      .then((benches) => dispatch(receiveBenches(benches)))
  );
};

export const createBench = bench => dispatch => {
  return (
    BenchesAPIUtil.createBench(bench)
      .then((bench) => dispatch(receiveBench(bench)))
  );
};