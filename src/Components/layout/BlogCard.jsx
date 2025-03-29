import React from "react";

const BlogCard = () => {

        const blogCardPost = [
            {
                images: "/src/assets/image/doc2.jpg",
                name: "Dr. Gerard Nwazuruoke",
                headlines: "The Future of Digital Medical Records: What’s Next?",
                text: "Explore emerging technologies such as blockchain, AI-driven analytics, and cloud storage in medical record management."
            },
            {
                images: "/src/assets/image/doc3.jpg",
                name: "Dr. Oluwaseun Emmanuel Babalola",
                headliness: "How Secure Are Your Health Records?",
                text: "A deep dive into security measures like encryption, multi-factor authentication, and compliance with healthcare regulations."
            },
            {
                images: "/src/assets/image/doc1.jpg",
                name: "Dr. Ebuka Ezeanoro",
                headlines: "",
                text: ""
            },
            {
                images: "/src/assets/image/doc4.jpg",
                name: "Dr. Samson Ibironke",
                headlines: "5 Tips for Managing Your Health Data Efficiently",
                text: "Practical advice for patients and healthcare providers on organizing, updating, and securing medical records."
            },
            {
                images: "/src/assets/image/doc5.jpg",
                name: "Dr. Ashley Emmanuel",
                headlines: "Telemedicine & Digital Health: A New Era of Healthcare",
                text: "How virtual consultations and online medical records are changing the way we receive healthcare."
            },
            {
                images: "/src/assets/image/doc6.jpg",
                name: "Dr. Sam Emmanuel",
                headlines: "Understanding HIPAA & GDPR: Protecting Patient Privacy",
                text: "A guide to understanding key healthcare data protection laws and their impact on medical record systems."
            },
        ]

        return (

            <div className=" mt-5 flex flex-col lg:flex-row gap-5 pt-14">
                {blogCardPost.map((post, index) => (
                    <div className="h-[350px] gap-10 text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer" key={index}>
                        <div className=" flex flex-col justify-center items-center">
                            <img src={post.images} alt="img" className=" h-56 rounded-t-xl w-60" />
                            <h1 className=" font-semibold text-xl pt-4">{post.name}</h1>
                            <h3 className=" pt-2">{post.headlines}</h3>
                            <h2 className="pt-2">{post.text}</h2>
                        </div>
                    </div>
                ))}
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