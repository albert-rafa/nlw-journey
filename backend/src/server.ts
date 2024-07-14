import fastify from "fastify";
import cors from "@fastify/cors";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";

import { prisma } from "./lib/prisma";
import { errorHandler } from "./error-handler";
import { env } from "./env";

import { createTrip } from "./routes/create-trip";
import { createActivity } from "./routes/create-activity";
import { createLink } from "./routes/create-link";
import { createInvite } from "./routes/create-invite";
import { getTripDetails } from "./routes/get-trip-details";
import { getActivities } from "./routes/get-activities";
import { getLinks } from "./routes/get-links";
import { getParticipants } from "./routes/get-participants";
import { getParticipant } from "./routes/get-participant";
import { confirmTrip } from "./routes/confirm-trip";
import { confirmParticipant } from "./routes/confirm-participant";
import { updateTrip } from "./routes/update-trip";

const app = fastify();

app.register(cors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.setErrorHandler(errorHandler)

app.register(createTrip);
app.register(createActivity);
app.register(createLink);
app.register(createInvite);
app.register(getTripDetails);
app.register(getActivities);
app.register(getLinks);
app.register(getParticipants);
app.register(getParticipant)
app.register(confirmTrip);
app.register(confirmParticipant);
app.register(updateTrip);

app.get("/teste", () => {
  return "Rota de teste.";
});

app.get("/db", async () => {
  const trips = await prisma.trip.findMany();

  return { trips };
});

app.listen({ port: env.PORT }).then(() => {
  console.log("Server running...");
});
