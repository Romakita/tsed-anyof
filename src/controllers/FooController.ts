import {Controller, Get } from "@tsed/common";
import { Returns } from "@tsed/schema";

@Controller("/foo")
export class FooController {
  @Get("/")
  @Returns(200, String)
  get() {
    return 'foo'
  }
}
