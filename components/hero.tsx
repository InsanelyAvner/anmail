import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Image from "next/image"

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <h1 className="sr-only">ANMail</h1>
        <div className="text-foreground text-4xl sm:text-5xl sm:leading-none lg:text-7xl text-center">
          <span className="block text-foreground">Send securely</span>
          <span className="text-brand text-emerald-300 block md:ml-0">Stay unseen</span>
          <p className="pt-2 text-foreground my-3 text-sm sm:mt-5 lg:mb-0 sm:text-base lg:text-lg">Effortlessly send anonymous emails using our network of dummy emails.</p>
          <a data-size="medium" type="button" className="relative justify-center cursor-pointer inline-flex items-center space-x-2 text-center font-regular ease-out duration-200 rounded-md outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-600 hover:border-emerald-700 focus-visible:outline-emerald-700 data-[state=open]:bg-emerald-500/80 data-[state=open]:outline-emerald-700 text-sm px-4 py-2 h-[38px]" href="#email">
          <span className="truncate">Start Sending Emails</span>
          </a>
        </div>
      
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
