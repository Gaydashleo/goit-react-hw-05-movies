import getMovieCredits from 'API/get-movie-credits ';
import ActorsList from 'components/ActorsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




  function Cast() {
    const { movied } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
      getMovieCredits(movied).then(({ cast }) => {
        const actorsArray = [];

        cast.map(({ id, name, profile_path }) => {
          const actor = {
            id,
            name,
            photo: profile_path,
          };
          return actorsArray.push(actor);
        });
        setActors(actorsArray);
      });
    }, [movied]);
    return actors &&<ActorsList zctors={actors}/>
}
export default Cast;