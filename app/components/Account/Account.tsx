import { account_items } from "@/app/constants";
import MainHeading from "@/app/utils/MainHeading";
import MainParagraph from "@/app/utils/MainParagraph";

export default function Account() {
  return (
    <div className="py-28">
      <div className="container">
        {/* start section heading */}
        <div className="text-center">
          <MainHeading>Now is the time to open your Account.</MainHeading>
          <MainParagraph className="w-1/2 my-5 mx-auto">
            With typical market returns, you have to start young to secure your
            future. With Investa, it is never too late to build your nest egg.
          </MainParagraph>
        </div>
        {/* end section heading */}

        {/* strat section content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
          {account_items.map(({ id, icon: Icon, title, content }) => {
            return (
              <div
                key={id}
                className="border rounded-xl p-7 cursor-pointer hover:bg-gray-100"
              >
                <Icon className="mb-7" size={30} />
                <div className="font-bold my-4">{title}</div>
                <p className="text-gray-600">{content}</p>
              </div>
            );
          })}
        </div>
        {/* end section content */}
      </div>
    </div>
  );
}
