import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';
import { selectSingleBench } from '../../reducers/selectors';

const mapStateToProps = ({ entities: { benches }}, { match: { params } }) => {
  const benchId = params.benchId;
  const bench = selectSingleBench(benches, benchId);
  return ({
    benchId,
    bench
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBench: (id) => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);