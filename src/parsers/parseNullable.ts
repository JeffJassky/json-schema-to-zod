import { JSONSchema, Refs } from "../Types";
import { omit } from "../utils/omit";
import { parseSchema } from "./parseSchema";

/**
 * For compatibility with open api 3.0 nullable
 */
export const parseNullable = (
  schema: JSONSchema & { nullable: true },
  refs: Refs,
) => {
  return `${parseSchema(omit(schema, "nullable") as any, refs)}.nullable()`;
};
