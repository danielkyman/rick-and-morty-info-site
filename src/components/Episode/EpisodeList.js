import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  getEpisodes,
  prevPage,
  nextPage,
  jumpToPage
} from "../../redux/actions/episode";

import PageNav from "../../components/Navigation/PageNav";
import EpisodeCard from "../../components/Episode/EpisodeCard";

const EpisodeList = ({
  getEpisodes,
  episodes,
  page,
  loading,
  count,
  prevPage,
  nextPage,
  jumpToPage
}) => {
  useEffect(() => {
    getEpisodes(page);
  }, [page]);

  if (loading) {
    return <h3>Loading Cards...</h3>;
  }

  return (
    <div>
      <PageNav count={count} page={page} jumpToPage={jumpToPage} />
      <button onClick={() => prevPage(page, count)}>Prev</button>
      <button onClick={() => nextPage(page, count)}>Next</button>
      {episodes.map((episode, index) => (
        <EpisodeCard key={index} episode={episode} />
      ))}
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
  page: state.episode.page,
  count: state.episode.pageCount,
  loading: state.episode.loading
});

export default connect(mapStateToProps, {
  getEpisodes,
  prevPage,
  nextPage,
  jumpToPage
})(EpisodeList);
