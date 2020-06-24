export function pageLoader(filename, callback) {
  // axios.get est une action asynchrone ...
  // cad que tu n'auras pas le resultat instantanément
  // du coup on utilise soit :
  // - un callback
  // - une autre promesse
  axios
    .get(filename)
    .then((response) => {
      const html = response.data;
      callback(html);
    })
    .catch((err) => {
      console.error(err);
    });
}
