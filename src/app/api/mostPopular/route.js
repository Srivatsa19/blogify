import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const {searchParams} = new URL(req.url);
    const take = searchParams.get("take");
    try {
        const posts = await prisma.post.findMany({
            orderBy: { views: 'desc' },
            take: parseInt(take),
            include: {user: true},
        });
        return new NextResponse(JSON.stringify(posts, {status: 200}))
    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Something went wrong!!"}, {status: 500}))
    }
}