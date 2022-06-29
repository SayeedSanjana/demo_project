export default (model) => {
    const findAll = (data = {}) => {
        return model.find(data).lean();
    }
    const findOne = (data ={}) => {
        return model.findOne(data).lean();
    }
    const create = (data = {}) => {
        return model.create(data);
    }

    return Object.freeze({
        findAll,
        findOne,
        create
    })
}