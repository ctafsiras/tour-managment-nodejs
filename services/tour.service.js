const tourModel = require("../models/tour.model")
const Tour = require("../models/tour.model")

module.exports.postTourService = async (data) => {
    const result = await tourModel.create(data);
    return result;
}
module.exports.getToursService = async (queries) => {
    const result = await tourModel.find().select(queries.selectBy).sort(queries.sortBy).skip(queries.limit * (queries.page - 1)).limit(queries.limit);
    return result;
}
module.exports.getTourByIdService = async (id) => {
    await tourModel.updateOne({ _id: id }, { $inc: { viewCount: 1 } })
    const result = await tourModel.find({ _id: id });
    return result;
}
module.exports.patchTourByIdService = async (id, data) => {
    const result = await tourModel.updateOne({ _id: id }, { $set: data }, { runValidators: true })
    return result;
}
module.exports.getTrendingTourService = async () => {
    const result = await tourModel.find().sort("-viewCount").limit(3);
    return result;
}
module.exports.getCheapestTourService = async () => {
    const result = await tourModel.find().sort("price").limit(3);
    return result;
}