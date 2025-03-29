import React from "react";
import Button from "./layout/Button.jsx";
import BlogCard from "./layout/BlogCard.jsx";
// import img1 from "../../assets/image/blog1.jpg";
// import img2 from "../../assets/image/blog2.jpg";
// import img3 from "../../assets/image/blog3.jpg";
// import img4 from "../../assets/image/blog4.jpg";
// import img5 from "../../assets/image/blog5.jpg";
// import img6 from "../../assets/image/blog6.jpg";

export const Blogs = () => {

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
            <div className=" flex flex-col items-center text-center pb-10 lg:flex-row justify-between">
                <div>
                    <h1 className=" text-4xl font-bold flex text-center pb-7">
                        Latest Post
                    </h1>
                    <p className=" mt-2 text-center items-center text-2xl">
                    Stay updated with the latest trends in medical record management and healthcare technology.
                    </p>
                </div>
                <div className=" mt-4 lg:mt-0">
                    <Button title="Our Articles" />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
                <BlogCard />
            </div>
            {/* <div className=" my-8">
                <div className=" flex flex-wrap justify-center gap-5">
                    <BlogCard image={img1} headlines="How Secure Are Your Health Records?" />
                    <BlogCard image={img2} headlines="5 Tips for Managing Your Health Data Efficiently" />
                    <BlogCard image={img3} headlines="Telemedicine & Digital Health: A New Era of Healthcare" />
                    <BlogCard image={img4} headlines="Navigating Mental Health Record With Privacy Protection" />
                    <BlogCard image={img5} headlines="Understanding HIPAA & GDPR: Protecting Patient Privacy" />
                    <BlogCard image={img6} headlines="The Future of Digital Medical Records: What’s Next?" />
                </div>
            </div> */}
        </div>
    );
};

// export default Blogs;