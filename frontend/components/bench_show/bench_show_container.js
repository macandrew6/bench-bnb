import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { 
  selectSingleBench, 
  selectReviewsForBench } from '../../reducers/selectors';

const mapStateToProps = ({entities: {reviews, benches}}, { match } ) => {
  const benchId = parseInt(match.params.benchId);
  const bench = selectSingleBench(benches, benchId);
  const selectedReviewsForBench = selectReviewsForBench(reviews, bench);
  return ({
    benchId,
    bench,
    reviews: selectedReviewsForBench
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBench: (id) => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);