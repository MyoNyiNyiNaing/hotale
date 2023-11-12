import { useState } from "react";
import AboutUsBanner from "../components/AboutUsBanner";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import BlogCard from "../utils/BlogCard";
import { blogs } from "../utils/blogs";
import { AnimatePresence, motion } from "framer-motion";

const Blog = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  return (
    <>
      <AnimatePresence>
        {openLoginModal && <LoginModal setOpenLoginModal={setOpenLoginModal} />}
        {openSignUpModal && (
          <SignupModal setOpenSignUpModal={setOpenSignUpModal} />
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <AboutUsBanner
          openLoginModal={openLoginModal}
          setOpenLoginModal={setOpenLoginModal}
          openSignUpModal={openSignUpModal}
          setOpenSignUpModal={setOpenSignUpModal}
        >
          <div className=" text-center text-white min-h-[350px] lg:mb-10 flex flex-col items-center justify-center space-y-5 md:max-w-[60%] mx-auto">
            <h1 className=" text-[40px] md:text-[70px] font-[400]">Blogs</h1>
            <p className=" text-[28px] font-[400] ">Our Recent Articles</p>
          </div>
        </AboutUsBanner>

        <div className="flex flex-wrap justify-center gap-10 my-20 max-w-[1300px] mx-auto">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Blog;
