import Joi from "joi";
import dotenv from "dotenv";


dotenv.config();

const envVariablesSchema = Joi.object({
    PORT: Joi.number().default('3000')
});

const envVariables = {
    PORT: process.env.PORT
};

const { error, value: VEnvVars } = envVariablesSchema.validate(envVariables);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export = {
    PORT: VEnvVars.PORT,
};
