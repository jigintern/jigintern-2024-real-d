import { Router } from "https://deno.land/x/oak@v12.1.0/mod.ts";

const userRouter = new Router();

userRouter
    .get("/users", (context) => {
        // リクエストからCookieを取得
        console.log(context)
        //これでcookieが取れる
        console.log(context.cookies)
        context.response.body = "hello"
    });

export default userRouter;
