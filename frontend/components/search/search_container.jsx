import React from 'react';
import { connect } from 'react-redux';

import Search from './search';
import { fetchBenches } from '../../actions/bench_actions';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = ({ entities: { benches }, ui: { filters } }) => ({
  benches: Object.values(benches),
  minSeating: filters.minSeating,
  maxSeating: filters.maxSeating
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);