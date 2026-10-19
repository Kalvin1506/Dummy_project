import {NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";
export async function GET(){try{return NextResponse.json(await prisma.resource.findMany({orderBy:{name:"asc"}}))}catch{return NextResponse.json({error:"Database is not initialized. Run the seed command."},{status:503})}}
