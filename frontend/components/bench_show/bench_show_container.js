import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { 
  selectSingleBench, 
  selectReviewsForBench } from '../../reducers/selectors';

const mapStateToProps = (state, { match: { params } }) => {
  const benchId = parseInt(params.benchId);
  const bench = selectSingleBench(state.entities.benches, benchId);
  const reviews = selectReviewsForBench(state.entities.reviews, bench);
  console.log(reviews);
  return ({
    benchId,
    bench,
    reviews
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBench: (id) => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);