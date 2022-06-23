 import { DataTypes } from 'sequelize';
import sequelize from '../config/connectDB.js';

const Article = sequelize.define('Article', {
    // Model attributes are defined here
    ArticleId: {
      primaryKey : true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement : true
    },
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    Link: {
      type: DataTypes.STRING
    },
    MainPicture: {
      type: DataTypes.STRING
    },
    pubDate: {
      type: DataTypes.STRING
    },
    externalId: {
      type: DataTypes.STRING, 
      unique: true
    },
    
  }, {
    // Other model options go here
  });

  export default Article;