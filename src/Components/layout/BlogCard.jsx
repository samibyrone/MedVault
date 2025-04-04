import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BlogCard = () => {

    const blogCardPost = [
        {
            images: "/src/assets/image/blog1.jpg",
            headlines: "The Future of Digital Medical Records: What’s Next?",
            text: "Explore emerging technologies such as blockchain, AI-driven analytics, and cloud storage in medical record management." 
        },
        {
            images: "/src/assets/image/blog2.jpg",
            headlines: "How Secure Are Your Health Records?",
            text: "A deep dive into security measures like encryption, multi-factor authentication, and compliance with healthcare regulations."
        },
        {
            images: "/src/assets/image/blog3.jpg",
            headlines: "How Blockchain is Revolutionizing Health Records",
            text: "The potential of blockchain technology in securing and decentralizing medical records."
        },
        {
            images: "/src/assets/image/blog4.jpg",
            headlines: "5 Tips for Managing Your Health Data Efficiently",
            text: "Practical advice for patients and healthcare providers on organizing, updating, and securing medical records."
        },
        {
            images: "/src/assets/image/blog5.jpg",
            headlines: "Telemedicine & Digital Health: A New Era of Healthcare",
            text: "How virtual consultations and online medical records are changing the way we receive healthcare."
        },
        {
            images: "/src/assets/image/blog6.jpg",
            headlines: "Understanding HIPAA & GDPR: Protecting Patient Privacy",
            text: "A guide to understanding key healthcare data protection laws and their impact on medical record systems."
        },
    ]

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

        <div className=" my-5">
            <Slider ref={slider} {...settings}>
                {blogCardPost.map((post, index) => (
                    <div className="h-[350px] gap-10 text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer" key={index}>
                        <div>
                            <img src={post.images} alt="img" className=" h-56 rounded-t-xl w-full" />
                        </div>
                        <div className=" flex flex-col justify-center items-center">
                            <h3 className=" pt-2 text-xl font-semibold">{post.headlines}</h3>
                            <h2 className="mt-2 text-center lg:text-start pb-10">{post.text}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
        
        // <div className=" w-full lg:w-1/4 p-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-2 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out">
        //     <img
        //         className=" h-64 md:h-96 lg:h-40 w-full rounded-lg"
        //         src={img}
        //         alt="img"
        //     />
        //     <h2 className=" text-lg text-center font-semibold">{headlines}</h2>
        //     <p className=" text-center text-sm">
        //         Explore emerging technologies such as blockchain, 
        //         AI-driven analytics, and cloud storage in medical record management.
        //     </p>
        // </div>
    );
};

export default BlogCard;