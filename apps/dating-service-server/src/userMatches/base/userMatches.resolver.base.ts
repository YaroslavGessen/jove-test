/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { UserMatches } from "./UserMatches";
import { UserMatchesCountArgs } from "./UserMatchesCountArgs";
import { UserMatchesFindManyArgs } from "./UserMatchesFindManyArgs";
import { UserMatchesFindUniqueArgs } from "./UserMatchesFindUniqueArgs";
import { CreateUserMatchesArgs } from "./CreateUserMatchesArgs";
import { UpdateUserMatchesArgs } from "./UpdateUserMatchesArgs";
import { DeleteUserMatchesArgs } from "./DeleteUserMatchesArgs";
import { UserMatchesService } from "../userMatches.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserMatches)
export class UserMatchesResolverBase {
  constructor(
    protected readonly service: UserMatchesService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "read",
    possession: "any",
  })
  async _userMatchesItemsMeta(
    @graphql.Args() args: UserMatchesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [UserMatches])
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "read",
    possession: "any",
  })
  async userMatchesItems(
    @graphql.Args() args: UserMatchesFindManyArgs
  ): Promise<UserMatches[]> {
    return this.service.userMatchesItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => UserMatches, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "read",
    possession: "own",
  })
  async userMatches(
    @graphql.Args() args: UserMatchesFindUniqueArgs
  ): Promise<UserMatches | null> {
    const result = await this.service.userMatches(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserMatches)
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "create",
    possession: "any",
  })
  async createUserMatches(
    @graphql.Args() args: CreateUserMatchesArgs
  ): Promise<UserMatches> {
    return await this.service.createUserMatches({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => UserMatches)
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "update",
    possession: "any",
  })
  async updateUserMatches(
    @graphql.Args() args: UpdateUserMatchesArgs
  ): Promise<UserMatches | null> {
    try {
      return await this.service.updateUserMatches({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => UserMatches)
  @nestAccessControl.UseRoles({
    resource: "UserMatches",
    action: "delete",
    possession: "any",
  })
  async deleteUserMatches(
    @graphql.Args() args: DeleteUserMatchesArgs
  ): Promise<UserMatches | null> {
    try {
      return await this.service.deleteUserMatches(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
