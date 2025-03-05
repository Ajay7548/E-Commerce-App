import React from "react";
import Title from "../components/Title";
import OurPolicy from "../components/OurPolicy";
import Subscribe from "../components/Subscribe";
import about_img from '../assets/about_img.png'

const About = () => {
  return (
    <div className="flex flex-col gap-3">
      {/* Heading  */}
      <div className="text-2xl text-center py-6 ">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="grid md:grid-cols-2 gap-14 ">
        <div className="">
        <img
          src={about_img}
          alt=""
          className=""
          // error
        />
        </div>
        {/* paragraph  */}
        <div className="flex flex-col justify-between pt-8 pb-8">
          <div className="flex flex-col gap-4">
            <p className=" text-gray-600">
              Forever was born out of a passion for innovation and a desire to
              revolutionize the way people shop online. Our journey began with a
              simple idea: to provide a platform where customers can easily
              discover, explore, and purchase a wide range of products from the
              comfort of their homes.
            </p>
            <p className=" text-gray-600">
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
          </div>

          <div>
            <p className="text-black font-semibold my-6">Our Mission</p>
            <p className=" text-gray-600">
              Our mission at Forever is to empower customers with choice,
              convenience, and confidence. We're dedicated to providing a
              seamless shopping experience that exceeds expectations, from
              browsing and ordering to delivery and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* why choose us  */}

      <div className="text-xl md:text-2xl mt-8 py-4 ">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="grid md:grid-cols-3 w-full m-auto">
        <div className="w-full    p-7 md:p-16    text-sm border border-gray-200">
          <p className="font-semibold  py-4 md:py-8">Quality Assurance:</p>
          <p className="text-gray-600 ">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="w-full   p-7 md:p-16   text-sm border border-gray-200">
          <p className="font-semibold  py-4 md:py-8">Conveniences:</p>
          <p className="text-gray-600 ">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="w-full   p-7 md:p-16   text-sm border border-gray-200">
          <p className="font-semibold  py-4 md:py-8">Exceptional Customer Service:</p>
          <p className="text-gray-600 ">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <Subscribe />
    </div>
  );
};

export default About;
