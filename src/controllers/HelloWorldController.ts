import {Controller, Get, QueryParams} from "@tsed/common";
import { Default, Maximum, Returns, Schema } from "@tsed/schema";
import { ObjectIDCollection } from "../decorators/object-id-collection";

export class Thing {
  @Default(0)
  skip: number

  @Default(50)
  @Maximum(50)
  limit: number

  @ObjectIDCollection()
  asdfsad: number[]
}

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  @Returns(200, String)
  get(@QueryParams() params: Thing) {
    return 'hello'
  }
}
