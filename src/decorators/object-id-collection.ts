import { useDecorators } from "@tsed/core";
import { Schema } from "@tsed/schema";

const pattern = '^[a-fA-F\\d]{24}$'

export function ObjectIDCollection () {
  return useDecorators(
    Schema({
      oneOf: [
        {
          type: 'string',
          pattern,
        },
        {
          type: 'array',
          items: {
            type: 'string',
            pattern,
          },
        },
      ],
    }),
  )
}