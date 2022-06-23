import express from 'express'

import {scrappingFromWebsite,getArticles} from '../controllers/ArticleController.js'

const router = express.Router()




router.post(`/import` ,scrappingFromWebsite)


router.route(`/import `).post(scrappingFromWebsite)
router.get("/",getArticles)


export default router
