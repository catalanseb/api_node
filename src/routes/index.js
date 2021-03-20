const express = require('express');
const { NotFoundMiddleware, ErrorMiddleware } = require('../middlewares');

module.exports = function({ ProductRoutes }) {
    const router = express.Router();
    const apiRoutes = express.Router();

    apiRoutes
        .use(express.json());

    apiRoutes.use("/products", ProductRoutes);

    router.use("/api/v1.0", apiRoutes);

    router.use(NotFoundMiddleware);
    router.use(ErrorMiddleware);

    return router;
};