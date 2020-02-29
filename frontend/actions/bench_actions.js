import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

export const receiveBenches = benches => {
  return ({
    type: RECEIVE_BENCHES,
    benches
  });
};

export const receiveBench = (payload) => {
  return ({ // this was placed in a payload.. why did i come in this format?
    type: RECEIVE_BENCH,
    bench: payload.bench
  });
};

export const fetchBench = id => dispatch => {
  console.log('im here baby');
  return (
    BenchesAPIUtil.fetchBench(id)
      .then((payload) => dispatch(receiveBench(payload))) // payload??
  );
};

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