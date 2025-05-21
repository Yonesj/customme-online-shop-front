import StarIcon from "../../assets/icons/comment/Star_icon.svg?react";
import CloseBtnIcon from "../../assets/icons/comment/close-circle.svg?react";
import PrimaryButton from "../PrimaryButton.tsx";

interface CommentFormProps {
  productTitle: string;
}

function CommentForm({ productTitle }: CommentFormProps) {
  return (
    <div className="w-[64.9rem] h-[57.1rem] py-[2.4rem] px-[12.8rem] rounded-[1.6rem] text-[#434343] relative">
      <h5 className="heading-5">نظر خود را با ما در میان بگذارید</h5>
      <p className="body-3 text-[#898989]">در مورد {productTitle}</p>

      <div className="flex align-center gap-[0.8rem]">
        <span className="button-2 ">امتیاز دهید</span>
        <div className="stars-row">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} width="1.6rem" height="1.5rem" />
          ))}
        </div>
      </div>

      <form>
        <div className="w-[39.2] h-[6.8rem] flex flex-col gap-[0.4rem] mb-[0.8rem]">
          <label className="body-4 h-[2.4rem] text-[#CBCBCB]">عنوان نظر</label>
          <input
            type="text"
            className="w-full h-[4rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <div className="w-[39.2] h-[6.8rem] flex flex-col gap-[0.4rem] mb-[0.8rem]">
          <label className="body-4 h-[2.4rem] text-[#CBCBCB]">نکات مثبت</label>
          <input
            type="text"
            className="w-full h-[4rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <div className="w-[39.2] h-[6.8rem] flex flex-col gap-[0.4rem] mb-[0.8rem]">
          <label className="body-4 h-[2.4rem] text-[#CBCBCB]">نکات منفی</label>
          <input
            type="text"
            className="w-full h-[4rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <div className="w-[39.2] h-[6.8rem] flex flex-col gap-[0.4rem] mb-[2.4rem]">
          <label className="body-4 h-[2.4rem] text-[#CBCBCB]">متن نظر *</label>
          <input
            type="text"
            className="w-full h-[9rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <PrimaryButton type="submit" className="w-full" text="ثبت دیدگاه" />
        <p className="caption-4 text-[#434343] text-center">
          ثبت دیدگاه به معنی موافقت شما با قوانین انتشار کاستومی است.
        </p>
      </form>

      <button className="absolute top-[2.4rem] left-[2.4rem] bg-transparent border-none">
        <CloseBtnIcon width="2.4rem" height="2.4rem" />
      </button>
    </div>
  );
}

export default CommentForm;
