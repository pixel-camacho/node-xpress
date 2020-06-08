const  {countries, languages} =  require('countries-list');

const routes = (app) => {
  app.get("/", (request, response) => {
    response.status(200).send("Hello");
  });

  app.get("/country", (request, response) => {
    response.json(countries[request.query.code]);
  });

  app.get("/languages/:lang", (request, response) => {
    const lang = languages[request.params.lang];
    if (lang) {
      response.json([(status = "OK"), (data = lang)]);
    } else {
      response
        .status(404)
        .json([
          (status = "NOT FOUND"),
          (message = "languages ${request.params.lang } not found"),
        ]);
    }
  });
  
  app.get("*", (request, response) => {
    response.status(404).send("NOT FOUND");
  });
};

module.exports = routes;