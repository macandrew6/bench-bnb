import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { selectSingleBench, selectReviewsForBench } from '../../reducers/selectors';

const mapStateToProps = ({ entities: { benches, reviews }}, { match: { params } }) => {
  const benchId = params.benchId;
  const bench = selectSingleBench(benches, benchId);
  // const reviewsForBench = selectReviewsForBench(reviews, bench);
  console.log(selectReviewsForBench(reviews, bench));
  return ({
    benchId,
    bench,
    // reviews: reviewsForBench
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBench: (id) => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);