import Link from "next/link";
import Image from "next/image";

import MainButton from "@/app/utils/MainButton";
import { AiOutlinePlayCircle } from "react-icons/ai";

import img_1 from "@/app/images/logos/cnn.svg";
import img_2 from "@/app/images/logos/bbc.svg";
import img_3 from "@/app/images/logos/cbs.svg";
import img_4 from "@/app/images/logos/forbes.svg";
import img_5 from "@/app/images/logos/fast-company.svg";
import img_6 from "@/app/images/logos/huffpost.svg";
import img_7 from "@/app/images/logos/techcrunch.svg";
import img_8 from "@/app/images/logos/wired.svg";
import app_store_img from "@/app/images/playStore.png";
import phone_frame from "@/app/images/phone-frame.svg";

export default function HeroSection() {
  return (
    <div className="py-40">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* left section */}
        <div>
          {/* video section */}
          <div>
            <h2 className="text-4xl font-semibold">
              Invest at the perfect time.
            </h2>
            <p className="my-10 text-gray-600 text-xl">
              By leveraging insights from our network of industry insiders, you
              will know exactly when to buy to maximize profit, and exactly when
              to sell to avoid painful losses.
            </p>
            <div className="flex mb-20">
              <Image src={app_store_img} height={42} alt={"app_store"} />
              <Link href={"https://www.youtube.com/watch?v=dVGQ0BxNxzo"}>
                <MainButton className="d-flex">
                  <AiOutlinePlayCircle className="inline" /> watch the video
                </MainButton>
              </Link>
            </div>
          </div>

          {/* features section */}
          <div>
            <h3 className="my-10 font-bold text-base">As featured in</h3>
            <div className="grid grid-cols-4 gap-10">
              <Image src={img_1} alt={"img"} />
              <Image src={img_2} alt={"img"} />
              <Image src={img_3} alt={"img"} />
              <Image src={img_4} alt={"img"} />
              <Image src={img_5} alt={"img"} />
              <Image src={img_6} alt={"img"} />
              <Image src={img_7} alt={"img"} />
              <Image src={img_8} alt={"img"} />
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="text-center">
          <Image src={phone_frame} className="block m-auto" alt="phone_frame" />
        </div>
      </div>
    </div>
  );
}
