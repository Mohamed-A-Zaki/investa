import { features_items } from "@/app/constants";
import MainHeading from "@/app/utils/MainHeading";
import MainParagraph from "@/app/utils/MainParagraph";

export default function Features() {
  return (
    <div className="py-28 bg-black text-white">
      <div className="container">
        <div className="text-center">
          <MainHeading>
            Every feature you need to win. Try it for yourself.
          </MainHeading>
          <MainParagraph className="w-1/2 my-5 text-gray-400 m-auto">
            Investa was built for investors like you who play by their own rules
            and are not going to let SEC regulations get in the way of their
            dreams. If other investing tools are afraid to build it, Investa has
            it.
          </MainParagraph>
        </div>

        {/* strat section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {features_items.map(({ id, icon: Icon, title, content }) => {
            return (
              <div
                key={id}
                className="rounded-xl p-7 cursor-pointer hover:bg-gray-900 border border-gray-900"
              >
                <Icon className="mb-7" size={30} />
                <div className="font-bold my-4 text-xl">{title}</div>
                <p className="text-gray-400">{content}</p>
              </div>
            );
          })}
        </div>
        {/* end section content */}
      </div>
    </div>
  );
}
