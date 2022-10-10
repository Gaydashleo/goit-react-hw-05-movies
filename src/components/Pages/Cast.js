import getMovieCredits from 'API/get-movie-credits ';
import ActorsList from 'components/ActorsList';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';




  function Cast() {
    const { movieId } = useParams();
    const [actors, setActors] = useState(null);

    useEffect(() => {
      getMovieCredits(movieId).then(({ cast }) => {
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
    }, [movieId]);
    return actors &&<ActorsList zctors={actors}/>
}
export default Cast;