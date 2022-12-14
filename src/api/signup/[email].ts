import client from '@mailchimp/mailchimp_marketing';
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby"

export default async function handler(
  req: GatsbyFunctionRequest<{'tags':Array<'newsletter' | 'events' | 'Website Newsletter Signup'>}>,
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

  const email_address = req.params.email;

  if (req.body.tags){

    let tags = req.body.tags;

    let interests = {
      '394a48c92f': tags.indexOf('events') > -1,
      '247768fce2': tags.indexOf('newsletter') > -1
    }
    tags = ['Website Newsletter Signup']
    try{



      const responded = await client.lists.addListMember(process.env.MAILCHIMP_LIST_ID!,
        {email_address,
        status: "subscribed",
        tags,
        interests,
        marketing_permissions: [{
          marketing_permission_id:  '01d50e3e43',
          enabled:true,
        }]
      });
      //@ts-ignore

      res.json({success: true, message:'Signed up!'})
    } catch(e){
      res.json({success:false, e})
    }
  } else {
    throw new Error("No tags");
  }
}