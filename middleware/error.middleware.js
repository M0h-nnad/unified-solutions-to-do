const errorMiddlerWare = (error, req, res, next) => {
    if (error.name === "ValidationError") {
        let errors = {};

        Object.keys(error.errors).forEach((key) => {
            errors[key] = error.errors[key].message;
        });
        return res.status(400).send(errors);
    }
    return res.status(500).send({ message: 'Something Went Wrong' });
}

module.exports = errorMiddlerWare;