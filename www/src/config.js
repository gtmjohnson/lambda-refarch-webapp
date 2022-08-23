// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "4orcq3q9cvmrdjel00dclc3s5s",     // CognitoClientID
  "api_base_url": "https://myasuf4oj6.execute-api.us-east-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "cognito_hosted_domain": "testapp-test.auth.us-east-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d26nwugop59daf.amplifyapp.com"                                      // AmplifyURL
};

export default config;
