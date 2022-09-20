const { postTourService, getToursService, getTourByIdService, patchTourByIdService, getTrendingTourService, getCheapestTourService } = require("../services/tour.service")

module.exports.postTourController = async (req, res) => {
    console.log(req.body)
    try {
        const result = await postTourService(req.body);
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}
module.exports.getToursController = async (req, res) => {
    try {
        const queries = {};
        req.query.page ? queries.page = +req.query.page : queries.page = 1;
        req.query.limit ? queries.limit = +req.query.limit : queries.limit = 10;
        if (req.query.fields) {
            const selectBy = req.query.fields.split(',').join(' ');
            queries.selectBy = selectBy;
        }
        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ');
            queries.sortBy = sortBy;
        }
        const result = await getToursService(queries);
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}
module.exports.getTourByIdController = async (req, res) => {
    try {
        const result = await getTourByIdService(req.params.id);
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}
module.exports.patchTourByIdController = async (req, res) => {
    try {
        const result = await patchTourByIdService(req.params.id, req.body);
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}
module.exports.getTrendingTourController = async (req, res) => {
    try {
        const result = await getTrendingTourService();
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}
module.exports.getCheapestTourController = async (req, res) => {
    try {
        const result = await getCheapestTourService();
        res.send({ status: "Success", data: result })
    } catch (error) {
        res.send(error)
    }
}