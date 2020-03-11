import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getEpisodes,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/episode";

import EpisodePageNav from "../../components/Navigation/EpisodePageNav";
import Card from "../../components/Card/Card";
import EpisodeInfo from "./EpisodeInfo";

const EpisodeList = ({
  getEpisodes,
  episodes,
  episodepage,
  loading,
  count,
  prevPage,
  nextPage,
  jumpToPage
}) => {
  useEffect(() => {
    getEpisodes(episodepage);
  }, [episodepage]);

  if (loading) {
    return <h3>Loading Cards...</h3>;
  }

  console.log(episodepage);
  return (
    <div>
      <EpisodePageNav
        count={count}
        page={episodepage}
        jumpToPage={jumpToPage}
      />
      <button onClick={() => prevPage(episodepage, count)}>Prev</button>
      <button onClick={() => nextPage(episodepage, count)}>Next</button>
      <div className="card-container">
        {episodes.map((episode, index) => (
          <Card key={index} size="large">
            <EpisodeInfo episode={episode} />
          </Card>
        ))}
      </div>
    </div>
  );
};

EpisodeList.propTypes = {
  getEpisodes: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  jumpToPage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  episodes: state.episode.episodes,
  episodepage: state.episode.episodepage,
  count: state.episode.pageCount,
  loading: state.episode.loading
});

export default connect(mapStateToProps, {
  getEpisodes,
  prevPage,
  nextPage,
  jumpToPage
})(EpisodeList);
