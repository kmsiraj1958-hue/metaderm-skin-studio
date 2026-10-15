import Image from "next/image";
import Link from "next/link";
import { clinicName } from "@/lib/site";

export function BrandMark({ preload = false }: { preload?: boolean }) {
  return (
    <Link className="brand" href="/" aria-label={`${clinicName} home`}>
      <Image
        src="/images/logo-wordmark.png"
        alt=""
        width={748}
        height={445}
        preload={preload}
        sizes="(max-width: 640px) 168px, 210px"
        className="brand-logo"
      />
    </Link>
  );
}
