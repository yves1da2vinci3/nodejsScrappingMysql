
import { DataTypes } from 'sequelize';
import sequelize from '../config/connectDB.js';

const Import = sequelize.define('Import', {
    // Model attributes are defined here
    ImportId: {
      primaryKey : true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement : true
    },

    rawContent: {
      type: DataTypes.TEXT("long")
    },
   
    
  }, {
    // Other model options go here
  });

  export default Import;