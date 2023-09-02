import ClientCTA from "./ClientCTA";
import ClientInfoLink from "./ClientInfoLink";

export default function ClientSection() {
  return (
    <div className="bg-white">
      <main className="block">
        {/* Section */}
        <section className=" bg-[#090e34]  py-16   ">
          <div className="mx-auto max-w-md overflow-hidden py-4 px-6 sm:max-w-3xl lg:max-w-7xl lg:px-8">
            <div className="text-white text-center sm:max-w-xl sm:mx-auto ">
              <h1 className="sm:text-4xl text-3xl font-semibold sm:font-bold mb-4 text-center">
                Some of My Happy Clients
              </h1>
              <p className="sm:text-2lg text-[#959CB1]">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>

            {/* Client Infomation Link Section */}
            <div className="">
              <ClientInfoLink />
            </div>
          </div>
        </section>

        {/* CTA section */}
        <ClientCTA />
      </main>
    </div>
  );
}
