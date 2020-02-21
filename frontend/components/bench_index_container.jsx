import React from 'react';
import { connect } from 'react-redux';

import BenchIndex from './bench_index';
import { fetchBenches } from '../actions/bench_actions';

const mapStateToProps = ({ entities: { benches } }) => ({
  benches: Object.values(benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BenchIndex);