import * as BenchesAPIUtil from '../util/benches_api_util';

export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveBenches = benches => {
  return ({
    type: RECEIVE_BENCHES,
    benches
  });
};

export const receiveBench = ({ bench, reviews, authors }) => {
  return ({ // this was placed in a payload.. why did i come in this format?
    type: RECEIVE_BENCH,
    bench,
    reviews,
    authors
  });
};

export const receiveReview = ({ review, author }) => {
  return ({
    type: RECEIVE_REVIEW,
    review,
    author
  });
};

export const fetchBench = id => dispatch => {
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
      .then((payload) => dispatch(receiveBench(payload)))
  );
};

export const createReview = review => dispatch => {
  return (
    BenchesAPIUtil.createReview(review)
      .then((payload) => dispatch(receiveReview(payload)))
  );
};