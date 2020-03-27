import React from "react";
import { connect } from "react-redux";
import BenchForm from "./bench_form";
import { createBench } from "../../actions/bench_actions";

const mapStateToProps = ({ ui: { loading } }, { location }) => ({
  lat: new URLSearchParams(location.search).get("lat"),
  lng: new URLSearchParams(location.search).get("lng"),
  loading: loading.singleLoading
});

const mapDispatchToProps = dispatch => ({
  createBench: bench => dispatch(createBench(bench))
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);
