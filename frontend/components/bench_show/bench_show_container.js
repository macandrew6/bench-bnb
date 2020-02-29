import { connect } from 'react-redux';
import BenchShow from './bench_show';
import { fetchBench } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.match.params.benchId);
  console.log(state.entities.benches);
  return ({
    
  });
};

const mapDispatchToProps = dispatch => ({
  fetchBenche: (id) => dispatch(fetchBench(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchShow);