import { useAppSelector } from "../app/store";
import { useRouter } from "next/router";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const protectedUrls = new Set<string>(["/investments"]);

export default function RouteGuard({ children }: Props) {
  const token = useAppSelector((state) => state.auth.token);
  const { asPath, push } = useRouter();
  useEffect(() => {
    if (token == null && protectedUrls.has(asPath)) push("auth/login").then();
  }, [token, asPath]);
  return <>{children}</>;
}
