import React from 'react';
import BenchMap from '../bench_map/bench_map';
import BenchDetail from './bench_detail';
import ReviewFormContainer from './review_form_container';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/routes_util';
import { ReviewLink } from '../../util/link_util';

const BenchShow = ({ bench, fetchBench, benchId, reviews }) => {
  const benches = {
    [benchId]: bench
  };

  return (
    <div className="bench-show-container">
      <div className="lefthalf-bench-show">
        <Link to='/'>Back to Benches</Link>
        <BenchMap 
          benches={benches}
          singleBench={true}
          benchId={benchId}
          fetchBench={fetchBench}
        />
      </div>
      <div className="righthalf-bench-show">
        <BenchDetail 
          bench={bench}
          reviews={reviews}
        />
        <ReviewLink
          component={ReviewFormContainer}
          to={`/benches/${benchId}/review`}
          label='Leave a Review'
        />
        <ProtectedRoute 
          path='/benches/:benchId/review'
          component={ReviewFormContainer}
        />
      </div>
    </div>
  );
};

export default BenchShow;