import yaml from "js-yaml";
import fs from "fs";

export default function readYaml(path) {
  try {
    const doc = fs.readFileSync(path, "utf8");
    let data = yaml.load(doc);
    return data;
  } catch (e) {
    console.log(e);
  }
}
