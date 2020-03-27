import * as BenchesAPIUtil from "../util/benches_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";
export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const START_LOADING_SINGLE_BENCH = "START_LOADING_SINGLE_BENCH";
export const START_LOADING_ALL_BENCHES = "START_LOADING_ALL_BENCHES";

export const startLoadingAllBenches = () => {
  return {
    type: START_LOADING_ALL_BENCHES
  };
};
export const startLoadingSingleBench = () => {
  return {
    type: START_LOADING_SINGLE_BENCH
  };
};

export const receiveBenches = benches => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

// was placed in a payload because it was how it was received from the backend
// when sending multiple items of data form the backend
export const receiveBench = ({ bench, reviews, authors }) => {
  return {
    type: RECEIVE_BENCH,
    bench,
    reviews,
    authors
  };
};

export const receiveReview = ({ review, author, average_rating }) => {
  return {
    type: RECEIVE_REVIEW,
    review,
    author,
    average_rating
  };
};

export const fetchBench = id => dispatch => {
  return BenchesAPIUtil.fetchBench(id).then(payload =>
    dispatch(receiveBench(payload))
  );
};

export const fetchBenches = filters => dispatch => {
  dispatch(startLoadingAllBenches());
  return BenchesAPIUtil.fetchBenches(filters).then(benches =>
    dispatch(receiveBenches(benches))
  );
};

export const createBench = bench => dispatch => {
  dispatch(startLoadingSingleBench());
  return BenchesAPIUtil.createBench(bench).then(payload =>
    dispatch(receiveBench(payload))
  );
};

export const createReview = review => dispatch => {
  return BenchesAPIUtil.createReview(review).then(payload =>
    dispatch(receiveReview(payload))
  );
};
