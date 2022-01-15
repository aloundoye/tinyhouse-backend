import { IResolvers } from "@graphql-tools/utils";
import { Database, Listing } from "../lib/types";
import { ObjectId } from "mongodb";

export const resolvers: IResolvers = {
  Query: {
    listings: async (
      root: undefined,
      args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    },
  },

  Mutation: {
    deleteListing: async (
      root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteResult = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });

      if (!deleteResult.value) {
        throw new Error("failed to delete listing");
      }

      return deleteResult.value;
    },
  },

  Listing: {
    id: (listing: Listing): string => listing._id.toString(),
  },
};
