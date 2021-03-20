class ProductController {

    async get(req, res) {
        return res.status(200).json({ data: "get product by id" });
    }
    async getAll(req, res) {
        return res.status(200).json({ data: "get all products" });
    }
    async create(req, res) {
        return res.status(200).json({ data: "create product" });
    }
    async update(req, res) {
        return res.status(200).json({ data: "update product" });
    }
    async delete(req, res) {
        return res.status(200).json({ data: "delete product" });
    }

}

module.exports = ProductController;