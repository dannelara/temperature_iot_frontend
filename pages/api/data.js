// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { connectDB } from "../../utils/mongoose.js";
import { TemperatureData } from "../../utils/model/data.js";

export default async function handler(req, res) {
  await connectDB();

  const method = req.method;

  if (method == "POST") {
    // Remove old data.
    TemperatureData.remove();

    const { temperature, warning } = req.query;

    const newData = new TemperatureData({
      temperature: temperature,
      warning: warning,
    });

    await newData.save();

    return res.status(200).json(newData);

  } else if (method == "GET") {

    const data = await TemperatureData.find({});
    const items = await Promise.all(data);

    return res.status(200).json(items);

  }

  return res.status(405).json({ message: "Method not allowed." });
}