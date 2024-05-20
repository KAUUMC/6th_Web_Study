import React from 'react';
import Movie from './Components/Movie';
import { movies } from './movieDummy';
function App() {
  return (
    <div>
      <div className="app-container">
        {
          movies.results.map((item) => {
            return(
              <Movie
              key={item.id} // 성능을 최적화하고, DOM 업데이트를 효율적으로 수행
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
              description={item.overview}  // 영화 설명 추가
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
