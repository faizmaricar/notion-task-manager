import path from "path";

export default function getPath(relativeFilePath) {
  return path.join(path.resolve(path.dirname("")), relativeFilePath);
}
