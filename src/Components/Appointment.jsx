import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Appointment = () => {
    const data = [
        {
            images: "/src/assets/image/doc1.jpg",
            name: "Dr. Ebuka Ezeanoro",
            specialties: "Orthopedic Surgeon",
        },
        {
            images: "/src/assets/image/doc2.jpg",
            name: "Dr. Seun Emmanuel",
            specialties: "Cardiologist",
        },
        {
            images: "/src/assets/image/doc3.jpg",
            name: "Dr. Gerard Nwazuruoke",
            specialties: "Pediatrician",
        },
        {
            images: "/src/assets/image/doc4.jpg",
            name: "Dr. Ashley Emmanuel",
            specialties: "Neurologist",
        },
        {
            images: "/src/assets/image/doc5.jpg",
            name: "Dr. Samson Ibironke",
            specialties: "Dermatologist",
        },
        {
            images: "/src/assets/image/doc6.jpg",
            name: "Dr. Sam Emmanuel",
            specialties: "Ophthalmologist",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
            <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div>
                    <h1 className=" text-4xl font-bold text-center lg:text-start">
                        Our Doctors
                    </h1>
                    <p className=" mt-2 text-center lg:text-start text-2xl font-semibold">
                        Need to see a doctor?
                    </p>
                    {/* <ul className="items-center text-2xl">
                        <li>Choose a date and time that works for you.</li>
                        <li>Receive a confirmation email with appointment details.</li>
                        <li>Book an Appointment Now.</li>
                        <li> Select your preferred healthcare provider.</li>
                    </ul> */}
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <button
                        className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowLeft size={25} />
                    </button>
                    <button
                        className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowRight size={25} />
                    </button>
                </div>
            </div>
            <div className=" mt-5">
                <Slider ref={slider} {...settings}>
                    {data.map((doctor, index) => (
                        <div
                            className="h-[350px] gap-10 text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                            key={index}
                        >
                            <div>
                                <img src={doctor.images} alt="img" className=" h-56 rounded-t-xl w-full pl" />
                            </div>

                            <div className=" flex flex-col justify-center items-center">
                                <h1 className=" font-semibold text-xl pt-4">{doctor.name}</h1>
                                <h3 className=" pt-2">{doctor.specialties}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};
