import app from "./app";
import { env } from "./config/env";
import { pool } from "./config/db";

const startServer = async (): Promise<void> => {
  try {
    await pool.query("SELECT NOW()");
    console.log("Database connected successfully");

    app.listen(env.port, () => {
      console.log(`DevPulse API is running on port ${env.port}`);
    });
  } catch (error) {
    console.error("Failed to start server", error);
    process.exit(1);
  }
};

void startServer();