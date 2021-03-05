import {Controller, Get, QueryParams} from "@tsed/common";
import { Default, Maximum, Returns, Schema } from "@tsed/schema";
import { useDecorators } from "@tsed/core";

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

export class Thing {
  @Default(0)
  skip: number

  @Default(50)
  @Maximum(50)
  limit: number

  @ObjectIDCollection()
  asdfsad: number
}

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  @Returns(200, String)
  get(@QueryParams() params: Thing) {
    return 'hello'
  }
}
