import MainButton from "@/app/utils/MainButton";

export default function Footer() {
  return (
    <div>
      <div className="container flex justify-between items-center py-10 border-t">
        <div className="text-gray-500 text-sm">© Copyright 2023. All rights reserved.</div>
        <div className="flex gap-2">
          <input
            type="email"
            className="border py-1 px-3 rounded-lg"
            placeholder="Email Address"
          />
          <MainButton className="bg-main font-bold text-white py-1 px-3">
            join our newsletter
          </MainButton>
        </div>
      </div>
    </div>
  );
}
