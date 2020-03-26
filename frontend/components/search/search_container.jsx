import React from "react";
import { connect } from "react-redux";

import Search from "./search";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = ({
  entities: { benches },
  ui: { filters, loading }
}) => ({
  benches: Object.values(benches),
  minSeating: filters.minSeating,
  maxSeating: filters.maxSeating,
  loading: loading.indexLoading
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
