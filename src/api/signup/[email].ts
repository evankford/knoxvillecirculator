const client = require( '@mailchimp/mailchimp_marketing');
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default async function handler(
  req: GatsbyFunctionRequest<{email:string}>,
  res: GatsbyFunctionResponse
) {

  // if (req.method != 'POST'){
  //   res.status(404);
  //   res.json({success: false, message: 'POST is the only accepted method.'})
  // }

  client.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER,
  })

  const email_address = await req.params.email;
try{

  const responded = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID!,
    {email_address,
    status: "subscribed",
    tags: ['Website Newsletter Signup'],
    marketing_permissions: [{
      marketing_permission_id:  '01d50e3e43',
      enabled:true,
    }]
  }
  )
  res.json({success: true, message:'Signed up!'})
} catch(e){
  res.json({success:false, e})
}
}