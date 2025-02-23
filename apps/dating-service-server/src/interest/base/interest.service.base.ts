/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Interest as PrismaInterest } from "@prisma/client";

export class InterestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.InterestCountArgs, "select">): Promise<number> {
    return this.prisma.interest.count(args);
  }

  async interests(
    args: Prisma.InterestFindManyArgs
  ): Promise<PrismaInterest[]> {
    return this.prisma.interest.findMany(args);
  }
  async interest(
    args: Prisma.InterestFindUniqueArgs
  ): Promise<PrismaInterest | null> {
    return this.prisma.interest.findUnique(args);
  }
  async createInterest(
    args: Prisma.InterestCreateArgs
  ): Promise<PrismaInterest> {
    return this.prisma.interest.create(args);
  }
  async updateInterest(
    args: Prisma.InterestUpdateArgs
  ): Promise<PrismaInterest> {
    return this.prisma.interest.update(args);
  }
  async deleteInterest(
    args: Prisma.InterestDeleteArgs
  ): Promise<PrismaInterest> {
    return this.prisma.interest.delete(args);
  }
}
