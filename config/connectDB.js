

  import { Sequelize } from 'sequelize';

// connexion a la base de donnees 
const db = new Sequelize('webscrappingdb', 'root', 'Dieu_Benit_Moi1', {  host: 'localhost',    dialect:'mysql' ,port : 3307 });
export default   db
  