import React, { useState } from "react";
import { Route, Switch } from "react-router";
import App from "./App";
import Home from "./Components/Home";
import MovieDescription from "./Components/MovieDescription";
import { v4 as uuidv4 } from "uuid";

const RouteCompononet = () => {
  // movies state an array of objects
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      title: "Interstellar",
      description:
        "In the near future, the Earth is less and less welcoming to humanity which is experiencing a serious food crisis. The film chronicles the adventures of a group of explorers who use a recently discovered rift in space-time to push human limits and set off to conquer astronomical distances on an interstellar journey.",
      posterURL: "/Intersteller.jpg",
      rating: 4,
      trailer: "https://www.youtube.com/embed/2LqzF5WauAw",
    },
    {
      id: uuidv4(),
      title: "Kingdom Of Heaven",
      description:
        "Somewhere in the kingdom of France in 1186, Balian, a young blacksmith overwhelmed by existence, learns that he is the son of Godefroy d Ibelin. But this noble line forced him to go to the Holy Land to defend reconquered Jerusalem. Once in Palestine, he was introduced to the art of war and political intrigue, with the help of Tiberias, the king s powerful military adviser.",
      posterURL: "/KingdomOfHeaven.jpg",
      rating: 3,
      trailer: "https://www.youtube.com/embed/moNH4N44D28",
    },
    {
      id: uuidv4(),
      title: "Exorcism Of Emily Rose",
      description:
        "Convinced of being possessed by the devil, a young student calls on a priest to exorcise her. But during this fight, the young girl is killed and the priest is then accused of homicide. The latter then finds himself at the heart of a trial which will shake the convictions of all.",
      posterURL: "/ExcorcismOfEmilyRose.jpg",
      rating: 2,
      trailer: "https://www.youtube.com/embed/kplIJ0YgHX8",
    },
  ]);
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/movielist"
          render={(props) => (
            <App {...props} movies={movies} setMovies={setMovies} />
          )}
        ></Route>
        <Route
          exact
          path="/movielist/:id"
          render={(props) => <MovieDescription data={movies} {...props} />}
        />
      </Switch>
    </div>
  );
};

export default RouteCompononet;
