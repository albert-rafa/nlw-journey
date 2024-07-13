import fastify from "fastify";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { prisma } from "./lib/prisma";

import { createTrip } from "./routes/create-trip";
import { createActivity } from "./routes/create-activity";
import { createLink } from "./routes/create-link";
import { getTrip } from "./routes/get-trip";
import { getActivities } from "./routes/get-activities";
import { getLinks } from "./routes/get-links";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipant } from "./routes/confirm-participant";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(createTrip);
app.register(createActivity);
app.register(createLink);
app.register(getTrip);
app.register(getActivities);
app.register(getLinks);
app.register(confirmTrip);
app.register(confirmParticipant);

app.get("/teste", () => {
  return "Rota de teste.";
});

app.get("/db", async () => {
  const trips = await prisma.trip.findMany();

  return { trips };
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server running...");
});
