const request = require("request");
const url = `https://api.thecatapi.com/v1/breeds/search?q=` + process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  if (response.statusCode != 200) {
    console.log(statusCode);
    return;
  }
  // JSON is turning the body into a string
  const data = JSON.parse(body);
  const cat = data[0];
  if (!cat) {
    console.log("Cat not found");
    return;
  }
  console.log(cat.description);
});

const breedFetcher = (breedName) => {
  console.log(breedName);
};
body: [];
