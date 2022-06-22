/**
 * The data model.
 *
 * @author Daniel Martinez Lara
 * @version 1.0.0
 */

import mongoose from "mongoose";

// Create a schema.
const schema = new mongoose.Schema(
  {
  
    temperature: {
      type: String,
      required: true,
    },
    warning: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Create a model using the schema.
export const TemperatureData = mongoose.model("TemperatureData", schema);
