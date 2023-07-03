export async function getMoviesService(URL) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZTc4ZGQ2OWNiMmJmYjVkNjY5MmZjZmI4ZTMwMDA2MiIsInN1YiI6IjY0OTc0ZDNlZWI3OWMyMDBjNTZkNzIwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lOL2nEX5xQqOUvs2EEZKNZBmeuN-zokX2Enf8lSL4ZA',
    },
  };
  const resuits = await fetch(URL, options).then(res => res.json());
  return resuits;
}
