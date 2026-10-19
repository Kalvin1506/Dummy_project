import {NextRequest,NextResponse} from "next/server";
import {z} from "zod";
import {prisma} from "@/lib/prisma";
const schema=z.object({status:z.enum(["Department Review","Approved","Rejected","Request Changes","Resource Allocated","In Use","Returned","Completed"]),reason:z.string().optional()});
export async function PATCH(req:NextRequest,{params}:{params:Promise<{id:string}>}){const {id}=await params;const parsed=schema.safeParse(await req.json());if(!parsed.success)return NextResponse.json({error:parsed.error.flatten()},{status:400});if(parsed.data.status==="Rejected"&&!parsed.data.reason?.trim())return NextResponse.json({error:"A rejection reason is required."},{status:400});try{return NextResponse.json(await prisma.resourceRequest.update({where:{id},data:{status:parsed.data.status}}))}catch{return NextResponse.json({error:"Request not found."},{status:404})}}
