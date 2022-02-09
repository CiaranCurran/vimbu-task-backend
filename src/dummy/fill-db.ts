import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { Resort } from "../entity/resort";
import data from "./dummydata";

// Configure dotenv before importing dynamic configs
dotenv.config();
import ormconfig from "../ormconfig";
import { Instructor } from "../entity/instructor";

createConnection(ormconfig)
  .then(async (connection) => {
    let promises = [];
    for (const i in data.resorts) {
      const resort = Resort.create({
        ...data.resorts[i],
        ...data.resorts[i].coordinates,
      } as Record<string, unknown>);
      promises.push(resort.save());
    }

    await Promise.all(promises);
    console.log("Resorts created");

    promises = [];
    for (const i in data.instructors) {
      const instructor = Instructor.create({
        ...data.instructors[i],
      } as Record<string, unknown>);
      promises.push(instructor.save());
    }
    await Promise.all(promises);
    console.log("Instructos created");

    console.log("Done.");
  })
  .catch((e) => console.log(e));
