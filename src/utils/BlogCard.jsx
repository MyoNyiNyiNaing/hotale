import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-100 shadow ">
      <Link to={`/blogDetails/${blog.id}`} className="relative">
        <div className=" inline-block border-2 overflow-hidden relative group">
          <img
            className="group-hover:scale-110 transition-all duration-300"
            src={blog?.img}
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300"></div>
        </div>
      </Link>
      <div className="pl-[40px] pr-[45px] pt-[35px] pb-[20px]">
        <Link to={""}>
          <div className=" text-[#4c4c4c] text-[13px] font-bold mb-[4px]">
            Dec 17, 2021
          </div>
          <div>
            <h3 className="mb-[20px] text-[27px] text-[#262626] font-bold transition duration-200 hover:text-[#656565]">
              {blog?.title}
            </h3>
          </div>
        </Link>
        <div>
          <p className=" text-[#656565] mb-5 text-[17px]">
            {blog?.desc.substring(0, 109)}...
          </p>
        </div>
        <Link
          to={`/blogDetails/${blog.id}`}
          className=" hover-underline-animation_blog gap-3 mb-[50px] text-[17px]  items-center py-2 font-normal transition duration-200 hover:text-[#656565] text-[#212121] focus:ring-4 focus:outline-none"
        >
          Read More
          <MdArrowRightAlt size={20} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
