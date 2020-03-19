import React, { useEffect, useState } from "react";

import CharInfoSingle from "../../components/Character/CharacterInfoSingle";
import Card from "../../components/Card/Card";
import Axios from "axios";

const CharacterSingle = props => {
  const id = props.location.state.id;

  const [loading, setLoading] = useState(true);
  const [char, setChar] = useState();

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
      setChar(res.data);
      setLoading(false);
    });
  }, [id]);
  return (
    <div className="page-container">
      <Card size="large">
        {!loading ? <CharInfoSingle char={char} full={true} /> : <>loading</>}
      </Card>
    </div>
  );
};
export default CharacterSingle;
