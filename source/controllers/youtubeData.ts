import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { ItemYoutubeVideo } from "../util/youtubeApiTypes";
const dotenv = require("dotenv");

// getting a  videos
const searchVideo = async (req: Request, res: Response, next: NextFunction) => {
  let query = req.query.input!;
  console.log(query);
  // get the videos
  try {
    let result: AxiosResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`
    );
    let ItemYoutubeVideo: ItemYoutubeVideo = result.data;
    return res.status(200).json({
      ItemYoutubeVideo,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Something failed!" });
  }
};

export default { searchVideo };
