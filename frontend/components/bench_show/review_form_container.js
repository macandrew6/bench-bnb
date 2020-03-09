import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/bench_actions';

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm);