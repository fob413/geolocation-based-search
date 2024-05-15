import Joi from "joi";
import dotenv from "dotenv";


dotenv.config();

const envVariablesSchema = Joi.object({
    PORT: Joi.number().default('3000'),
    DB_URL: Joi.string().required(),
    DB_TEST_URL: Joi.string().required()
});

const envVariables = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    DB_TEST_URL: process.env.DB_TEST_URL
};

const { error, value: VEnvVars } = envVariablesSchema.validate(envVariables);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

export = {
    PORT: VEnvVars.PORT,
    DBURL: VEnvVars.DB_URL,
    DBTESTURL: VEnvVars.DB_TEST_URL
};
