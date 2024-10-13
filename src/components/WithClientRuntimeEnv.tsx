"use client";

import { RUNTIME_ENVS_CONTAINER_ID } from "@/constants";
import { clientRuntimeEnvs } from "@/env";
import { unstable_noStore as noStore } from "next/cache";

function WithClientRuntimeEnv({ children }: { children: React.ReactNode }) {
  noStore();
  return (
    <>
      <div id={RUNTIME_ENVS_CONTAINER_ID} style={{ display: "none" }}>
        {JSON.stringify(clientRuntimeEnvs)}
      </div>
      {children}
    </>
  );
}

export default WithClientRuntimeEnv;
