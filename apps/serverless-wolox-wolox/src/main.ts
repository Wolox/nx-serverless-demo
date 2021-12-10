import * as utils from '../../../libs/utils/src';

module.exports.hello = async (event) => {
  console.log(utils.utils());

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
