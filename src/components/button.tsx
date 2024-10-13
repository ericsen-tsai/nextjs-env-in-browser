"use client";
import { env } from "@/env";
import { useState } from "react";

function Button() {
  const [hidden, setHidden] = useState(true);

  return (
    <button onClick={() => setHidden((h) => !h)}>
      {hidden ? <h3>Client Env: {env.CLIENT_SECRET_KEY}</h3> : "Hide"}
    </button>
  );
}

export default Button;
