import { createFileRoute, redirect } from "@tanstack/react-router";

/** Test route retired — plane now lives on `/`. Keep URL from 404ing. */
export const Route = createFileRoute("/flight-test")({
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
});
