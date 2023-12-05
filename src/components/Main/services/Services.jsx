import Service from "./Service";
import ServiceEven from "./ServiceEven";

function Services() {
  return (
    <div className="py-10 flex flex-col items-center justify-center gap-5">
      <h2 className="text-7xl font-black text-black">JioAirFiber services</h2>
      <p className="text-gray-700 font-semibold text-lg">
        The best-in-class value proposition.
      </p>
      <Service
        img="/jioairfiber-features-11.png"
        label="Digital Entertainment"
        desc1="Leading 550+ digital TV channels"
        desc2="Catch-up TV to watch missed episodes later"
        desc3="Subscriptions to the most popular 15+ OTT apps"
      />
      <ServiceEven
        img="/jioairfiber-features-1.webp"
        label="Broadband Connection"
        desc1="Wi-Fi connectivity and high-speed internet"
        desc2="Strong signal everywhere in your home"
      />
      <Service
        img="/jioairfiber-features-2.webp"
        label="Smart Home Services"
        desc1="Powers your surveillance, healthcare, smart home IoT, gaming, and home networking systems"
        desc2="Enables Cloud PC for education and work-from-home"
      />
      <ServiceEven
        img="/jioairfiber-features-3.webp"
        label="Home devices at no extra cost"
        desc1="Latest Wi-Fi router for coverage everywhere in your home"
        desc2="4K smart set-top box"
        desc3="Voice-active remote"
      />
    </div>
  );
}

export default Services;
