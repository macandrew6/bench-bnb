export const selectSingleBench = (benches, id) => {
  return benches[id];
};

export const selectReviewsForBench = (reviews, bench) => {
  console.log('reviews => ', reviews);
  console.log('bench => ', bench);
  return bench.reviewIds.map(reviewId => reviews[reviewId]);
};