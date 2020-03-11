import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LocationPageNav from "../../components/Navigation/LocationPageNav";

import {
  getLocations,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/location";

const LocationList = ({
  getLocations,
  locations,
  locationpage,
  loading,
  count,
  prevPage,
  nextPage,
  jumpToPage
}) => {
  useEffect(() => {
    getLocations(locationpage);
  }, [locationpage]);

  if (loading) {
    return <h3>Loading cards...</h3>;
  }
  return (
    <div>
      <LocationPageNav
        count={count}
        jumpToPage={jumpToPage}
        page={locationpage}
      />
      <button onClick={() => prevPage(locationpage, count)}>Prev</button>
      <button onClick={() => nextPage(locationpage, count)}>Next</button>
      {locations.map(item => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

LocationList.propTypes = {
  getLocations: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  jumpToPage: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  locations: state.location.locations,

  locationpage: state.location.locationpage,
  count: state.location.pageCount,
  loading: state.location.loading
});
export default connect(mapStateToProps, {
  getLocations,
  prevPage,
  nextPage,
  jumpToPage
})(LocationList);
