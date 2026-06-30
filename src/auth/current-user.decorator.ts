import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import type { User } from "../generated/prisma";

export type AuthUser = User;

export const CurrentUser = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return req.user;
  },
);