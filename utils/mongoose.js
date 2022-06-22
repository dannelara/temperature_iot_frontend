/**
 * The database.
 *
 * @author Daniel Martinez Lara
 * @version 1.0.0
 */

import mongoose from "mongoose";

/**
 * Establishes a connection to a database.
 *
 * @returns {Promise} Resolves to this if connection succeeded.
 */
export const connectDB = async () => {
  // Logging all possible events.
  mongoose.connection.on("connected", () =>
    console.log("Mongoose connection is open.")
  );
  mongoose.connection.on("error", (err) =>
    console.error(`Mongoose connection error has occurred: ${err}`)
  );
  mongoose.connection.on("disconnected", () =>
    console.log("Mongoose connection is disconnected.")
  );

  // close the connection if the node process ends..
  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        "Mongoose connection is disconnected due to application termination."
      );
      process.exit(0);
    });
  });

  // Connect to the server.
  return Object.freeze(
    mongoose
      .connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("DB connected");
      })
  );
};
