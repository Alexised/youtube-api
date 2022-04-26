/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
const { YOUTUBE_API_KEY } = require("../../config");
import { IYoutubeVideo } from '../util/youtubeApiTypes';


// getting a single post
const searchVideo  = async (req: Request, res: Response, next: NextFunction) => {
    // get the post id from the req
    console.log(req.query)
    let query = req.query.input!;
    console.log(query)
    // get the post
    let result: AxiosResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`);
    let IYoutubeVideo: IYoutubeVideo = result.data;
    return res.status(200).json({
        IYoutubeVideo
    });
};


export default { searchVideo ,  };