import Image from "next/image";

export default function Marquee() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
          <Image height={200} width={200} src="/IDX.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/JAPFA.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/maybank.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/nippon.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/otsuka.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/panasonic.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/pertamina.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/sinarmas.png" alt="Facebook" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <Image height={200} width={200} src="/starbucks.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/yakult.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/IDX.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/JAPFA.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/maybank.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/nippon.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/otsuka.png" alt="Facebook" />
        </li>
        <li>
          <Image height={200} width={200} src="/panasonic.png" alt="Facebook" />
        </li>
      </ul>
    </div>
  );
}
