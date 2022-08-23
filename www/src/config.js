// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "54qnqr3578vb5h9urbmo95aij2",     // CognitoClientID
  "api_base_url": "https://egvuy3otia.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "mytodoappdemo-ab3teststack.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d3w2asdraqnmhm.amplifyapp.com"                                      // AmplifyURL
};

export default config;
