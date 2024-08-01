import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect"
import { NextResponse } from "next/server"

// ALL COMMENTS

export const GET = async (req) => {

    const {searchParams} = new URL(req.url);

    const postSlug = searchParams.get("postSlug");

    try {

        const comments = await prisma.comment.findMany({
            where: {...(postSlug && {postSlug}),},
            include: {user: true},
        })

        return new NextResponse(JSON.stringify(comments, {status: 200}))
    } catch(err) {
        console.log(err)
        return new NextResponse(JSON.stringify({message: "Something went wrong!!"}, {status: 500}))
    }
}

// WRITE A COMMENT
export const POST = async (req) => {

    const session = await getAuthSession();

    if (!session) {
        return new NextResponse(JSON.stringify({message: "Not authenticated!!"}, {status: 401}))
    }

    try {

        const body = await req.json()

        // taking no parameters from the client side, verfying the user on the server side
        const comment = await prisma.comment.create({
            data: {...body, userEmail: session.user.email},
        });

        return new NextResponse(JSON.stringify(comment, {status: 200}))
    } catch(err) {
        return new NextResponse(JSON.stringify({message: "Something went wrong!!"}, {status: 500}))
    }
}