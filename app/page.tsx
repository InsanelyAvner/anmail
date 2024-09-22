import Hero from "@/components/hero";
import SendEmail from "@/components/sendEmail"

export default async function Index() {
  return (
    <>
      <Hero />
      <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4" id="email"></h2>
        <SendEmail></SendEmail>
      </main>
    </>
  );
}
