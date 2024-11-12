import { Inter, Brawler, Lusitana } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const brawlerB = Brawler({ subsets: ["latin"], weight: "700" });
export const brawler = Brawler({ subsets: ["latin"], weight: "400" });
export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
