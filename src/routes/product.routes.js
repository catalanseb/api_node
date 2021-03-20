const { Router } = require('express');

module.exports = function({ ProductController }) {
    const router = Router();

    router.get("/all", ProductController.getAll);
    router.get("/:productId", ProductController.get);
    router.post("", ProductController.create);
    router.patch("/:productId", ProductController.update);
    router.delete("/:productId", ProductController.delete);

    return router;
};