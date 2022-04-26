import express from 'express';
import controller from '../controllers/youtubeData';
const router = express.Router();

router.get('/searchVideo', controller.searchVideo );
export = router;