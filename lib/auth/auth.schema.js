import * as Joi from 'joi';

export const outputSchema = Joi.object().keys({
    access_token: Joi.string(),
    refresh_token: Joi.string(),
    type: Joi.string().valid('Bearer'),
    expires_in: Joi.number()
});