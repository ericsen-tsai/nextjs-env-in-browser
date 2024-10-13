import { RUNTIME_ENVS_CONTAINER_ID } from "./constants";

const isBrowser = typeof window !== "undefined";
const getServerEnvs = <T extends string>(keys: T[]): Record<T, string> => {
  return keys.reduce((acc, key) => {
    return { ...acc, [key]: process.env[key] ?? "" };
  }, {} as Record<T, string>);
};

const getClientRuntimeEnvs = <T extends string>(
  keys: T[]
): Record<T, string> => {
  return keys.reduce((acc, key) => {
    return {
      ...acc,
      [key]: isBrowser
        ? JSON.parse(
            document.getElementById(RUNTIME_ENVS_CONTAINER_ID)?.innerText ??
              "{}"
          )[key]
        : process.env[key] ?? "",
    };
  }, {} as Record<T, string>);
};

export const clientRuntimeEnvs = getClientRuntimeEnvs(["CLIENT_SECRET_KEY"]);
const serverEnvs = getServerEnvs(["SERVER_SECRET_KEY"]);

export type ClientRuntimeEnvs = typeof clientRuntimeEnvs;
export type ServerEnvs = typeof serverEnvs;

export const env = {
  ...clientRuntimeEnvs,
  ...(isBrowser ? {} : serverEnvs),
};
