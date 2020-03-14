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
  let mappedPictures = bench.pictures.map((picture, i) => (
    <img key={i} src={picture} width='300' height='300' alt='loading...' />
  ));

  return (
    <div>
      <Link to='/'>Back to Benches</Link>
      <div className="picture-carosel">
        {mappedPictures}
      </div>
      <h2>{bench.description}</h2>
      <div className="bench-show-container">
        
        <div className="lefthalf-bench-show">
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
        <div className="righthalf-bench-show">
          <BenchMap
            benches={benches}
            singleBench={true}
            benchId={benchId}
            fetchBench={fetchBench}
          />
        </div>
      </div>
    </div>
  );
};

export default BenchShow;
