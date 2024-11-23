import { ProcessEnvOptions } from "child_process";
import app from "./server";

const port: number = Number(process.env.PORT) || 5000;
const hostname = "127.0.0.1";

app.listen(port, hostname, () => {
  console.clear();
  console.log(`Server on at http://${hostname}:${port}`);
});
