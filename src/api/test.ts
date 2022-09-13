
import { GatsbyFunctionRequest, GatsbyFunctionResponse } from "gatsby";


export default function simple(req: GatsbyFunctionRequest,
  res: GatsbyFunctionResponse){
    res.status(200).json({worked: 'yay'})
  }