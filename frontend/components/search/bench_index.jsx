import React, { Component } from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBenches();
  }
  
  render() {
    return (
      <div>
        {this.props.benches.map(bench => (
          <BenchIndexItem key={performance.now()} bench={bench} />
        ))}
      </div>
    );
  }
}
