
const functions = require('@google-cloud/functions-framework');

functions.http('helloHttp', (req, res) => {
  try {
    const name = req.query.name;
    if (!name) {
      throw new Error('Missing name parameter');
    }
    res.send(`Hello ${name}!`);
  } catch (err) {
    res.status(500).send(functions.framework.showUnknownError(err));
  }
});

