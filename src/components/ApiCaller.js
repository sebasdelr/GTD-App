import React, { useState, useEffect, useCallback } from 'react';

function ApiCaller() {
    const [tasks, setTasks] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTasksHandler = useCallback(async () => {
    
    setIsLoading(true);
    setError(null);
    try {
      

      const response = await fetch('/tasks');
      
      if (!response.ok) {
        
        throw new Error('Something went wrong!');
        
      }
     
      const data = await response.json();

    

      const loadedTasks = [];

      for (const key in data) {
        loadedTasks.push({
          id: key,
          parentId: data[key].parentId,
          title: data[key].title,
          content: data[key].content,
          dateCreated: data[key].dateCreated,
          startDate: data[key].startDate,
          dateDue: data[key].dateDue,
          type: data[key].type,
          status: data[key].status,
          reviewed: data[key].reviewed,
          color: data[key].color,
        });
      }

      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(loadedMovies);
      setTasks(loadedTasks);
      console.log(loadedTasks[0]);
     
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchTasksHandler();
  }, [fetchTasksHandler]);

  // fetchTasksHandler();

  let content = <p>Found no Tasks.</p>;

  if (isLoading) {
    content = <p>Loading...</p>;
  }


  return (
    <div className="App">

      <section>
        <button onClick={fetchTasksHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </div>
  );
}

export default ApiCaller;