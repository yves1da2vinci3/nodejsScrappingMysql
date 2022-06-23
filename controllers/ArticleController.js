import asyncHandler from 'express-async-handler'

import Cheerio from 'cheerio'
import rqp from 'request-promise'
import  convert from 'xml-js';
import Import from '../models/importModel.js'
import Article from '../models/articlesModel.js'

const scrappingFromWebsite  = asyncHandler( async (req,res) =>{
    //recuperer tout les données du site
    const siteRssUrl =  req.query.siteRssUrl ;


const Articles = []

let rawContent = "" ;

 
     rqp(siteRssUrl)
       .then(xml => {
          const $ = Cheerio.load(xml, {
             xmlMode: true
          });
          // parsing XML to JSON
           rawContent = convert.xml2json($('channel'), {compact: true, spaces: 4}) 
           const date = new Date()
          const DataJson = JSON.parse(rawContent)
          console.log(   rawContent )  
     
        //   const imported = new Import(importDate,rawContent)
        // connection.query( ` INSERT INTO imports VALUES (${imported.importDate},${imported.rawContent})`  ,
        //       function(err, results, fields) {
        //         console.log(results); 
        //         console.log(err)
        //       })
        //inserted imports in database
        Import.create({
          rawContent
        }).then( sucess =>{
          // recuperation de tout les articles
          DataJson.channel.item.forEach(article => {
            Articles.push(article)
          });
          Articles.forEach(article =>{
            // declaration of the variables
            let title =     article.title._cdata
            let description =     article.description._cdata
            let Link =     article.link._text
            let MainPicture =    article["media:content"]._attributes.url
            let pubDate =     article.pubDate._text
            let externalId = article.guid._text
               Article.create({
                title,description,Link,MainPicture,pubDate,externalId
               }).then(success => console.log("successfully insertid"+ " " + externalId)).catch(err => console.log(err))
                })
        }).catch( err =>{

        })
          
          })
          res.json({ message : " scrapping et enregistrement effectué avec succès"})
       })
const getArticles  = asyncHandler( async (req,res) =>{
  const articles = await Article.findAll({})
  // let maxLength = 0;
  // let wordWithMostVowels = ""
  // const 
  const vowels = ["a","e","i","o","u","y"]
  // send the word with the most vowels for each article
  //array of 
  try{
    res.json(articles)
} catch (error) {
    console.log(error)
}

})



export   {getArticles,scrappingFromWebsite }
