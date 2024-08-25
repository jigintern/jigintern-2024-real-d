import { Application, send } from "https://deno.land/x/oak@v12.1.0/mod.ts";
import userRouter from "./routes/user.js";

const app = new Application();

// ルーターを適用
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.use(async (ctx, next) => {
  if (!ctx.request.url.pathname.startsWith("/")) {
    next();
    return;
  }
  let filePath = ctx.request.url.pathname;
  if(filePath === "/"){
    filePath = "/index.html"
  }
  await send(ctx, filePath, {
    root: "./public",
  });
});
  
// サーバーの起動
console.log("Listening on http://localhost:8000");
await app.listen({ port: 8000 });
