export const selectSingleBench = (benches, benchId) => {
  return benches[benchId];
};

export const selectReviewsForBench = (reviews, bench) => {
  return bench.reviewIds.map(reviewId => reviews[reviewId]);
};