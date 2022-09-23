import { Sequelize, SequelizeOptions } from 'sequelize-typescript'
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants'
import { User } from '../../modules/users/user.entity'

const dbConfig = require('./database.config.js')
export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config: SequelizeOptions
      switch (process.env.NODE_ENV) {
        case 'development':
          config = dbConfig.databaseConfig.development
          break
        case 'test':
          config = dbConfig.databaseConfig.test
          break
        case 'production':
          config = dbConfig.databaseConfig.production
          break
        default:
          config = dbConfig.databaseConfig.development
      }
      const sequelize = new Sequelize(config)
      sequelize.addModels([User])
      //   sequelize.addModels([__dirname + 'path/src/models/*']);
      await sequelize.sync()
      return sequelize
    }
  }
]
