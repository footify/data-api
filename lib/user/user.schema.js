const Joi = require('joi');

const outputSchema = Joi.object().keys({
    pseudo: Joi.string(),
    first_name: Joi.string(),
    last_name: Joi.string(),
    picture_url: Joi.string(),
    created_at: Joi.string()
});

module.exports.outputSchema = outputSchema;