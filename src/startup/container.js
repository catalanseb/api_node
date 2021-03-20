const { createContainer, asClass, asValue, asFunction } = require('awilix');

const config = require('../config');
const app = require('.');

const { ProductController } = require('../controllers');

const { ProductRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        ProductRoutes: asFunction(ProductRoutes).singleton()
    })
    .register({
        ProductController: asClass(ProductController.bind(ProductController)).singleton()
    });

module.exports = container;