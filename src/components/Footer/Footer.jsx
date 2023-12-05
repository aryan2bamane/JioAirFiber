import Social from "./Social";

function Footer() {
  return (
    <div className="w-full bg-gray-100">
      {" "}
      <div className="w-full bg-gray-100 h-2/4 flex justify-center">
        <div className=" w-3/4 flex justify-center gap-10 py-10">
          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Our offerings</h4>
            <ul className="text-gray-700 flex flex-col gap-5">
              <li>Prepaid</li>
              <li>Postpaid</li>
              <li>Services</li>
              <li>Services</li>
              <li>Devices</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5 ">
            <h4 className="text-xl font-bold">Support</h4>
            <ul className="text-gray-700 flex flex-col gap-5">
              <li>Track order</li>
              <li>Relocate JioFiber</li>
              <li>My account</li>
              <li>FAQ</li>
              <li>Locate us</li>
              <li>Claim refund</li>
              <li>Feedback</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Our company</h4>
            <ul className="text-gray-700 flex flex-col gap-5">
              <li>Reliance Industries</li>
              <li>Reliance Foundation</li>
              <li>JioLife</li>
              <li>Careers</li>
              <li>Investor relations</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-xl font-bold">Useful links</h4>
            <ul className="text-gray-700 flex flex-col gap-5">
              <li>Get JioFiber</li>
              <li>JioAutoPay</li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h4 className="text-3xl font-bold">Connect with us</h4>
            <div className=" flex gap-5">
              <Social img="/public/twitter.png" />
              <Social img="/public/insta.png" />
              <Social img="/public/youtube.png" />
              <Social img="/public/linkedin.png" />
            </div>

            <h4 className="text-3xl font-bold">Download MyJio</h4>
            <div className="flex gap-3">
              <img src="/public/G-Play.svg" alt="" />
              <img src="/public/AppStore.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex px-60 p-5 justify-between items-center">
        <div className="flex items-center gap-2 text-gray-600">
          <img className="h-10" src="/public/Jio_logo.png" alt="" />
          <p>
            Copyright © 2023 Reliance Jio Infocomm Ltd. All rights reserved.
          </p>
        </div>
        <ul className="flex gap-5 text-blue-800">
          <li>Press Release |</li>
          <li>Regulatory |</li>
          <li>Policies |</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
