import app from "./server";
import connectToDatabase from "./config/connecToDatabase";

const port: number = Number(process.env.PORT) || 5000;
const hostname = "127.0.0.1";

connectToDatabase();

app.listen(port, hostname, () => {
  console.clear();
  console.log(`Server on at http://${hostname}:${port}`);
});
