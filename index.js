// Launch app
const app = require('./src/app');

const port = process.env.PORT || 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started at ${port}`);
});
