import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { Methods } from "./Methods";

function routeFinder(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeFinder(Methods.get);
export const post = routeFinder(Methods.post);
export const put = routeFinder(Methods.put);
export const patch = routeFinder(Methods.patch);
export const del = routeFinder(Methods.del);
