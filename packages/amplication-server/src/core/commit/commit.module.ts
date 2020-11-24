import { Module } from "@nestjs/common";
import { PrismaModule } from "nestjs-prisma";
import { PermissionsModule } from "../permissions/permissions.module";
import { UserModule } from "../user/user.module";
import { CommitResolver } from "./commit.resolver";
import { CommitService } from "./commit.service";

@Module({
  imports: [PrismaModule, UserModule, PermissionsModule],
  providers: [CommitService, CommitResolver],
  exports: [CommitService, CommitResolver],
})
export class CommitModule {}
