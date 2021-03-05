import {Controller, Get, QueryParams} from "@tsed/common";
import { Default, Maximum, Returns, Schema } from "@tsed/schema";

import { ObjectIDCollection } from '../decorators/object-id-collection'

export class DifferentThing {
  @Default(0)
  skip: number

  @Default(50)
  @Maximum(50)
  limit: number

  @ObjectIDCollection()
  ids: string[]
}

@Controller("/foo")
export class FooController {
  @Get("/")
  @Returns(200, String)
  get(@QueryParams() params: DifferentThing) {
    return 'foo'
  }
}
