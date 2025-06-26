import { useForm, type Path } from "react-hook-form";
import "./CommentForm.css";

import StarIcon from "../../assets/icons/comment/Star_icon.svg?react";
import CloseBtnIcon from "../../assets/icons/comment/close-circle.svg?react";
import PrimaryButton from "../PrimaryButton";

interface CommentFormProps {
  productTitle: string;
  onClose: () => void;
  onSubmit: (data: CommentFormData) => void;
}

export interface CommentFormData {
  commentText: string;
  stars: number;
  positiveProps: string;
  negativeProps: string;
}

function CommentForm({ productTitle, onClose, onSubmit }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CommentFormData>();

  // const watchedStars = watch("stars" as Path<CommentFormData>);
  // useEffect(() => {
  //   if (watchedStars === undefined) {
  //     setValue("stars" as Path<CommentFormData>, 0);
  //   }
  // }, [watchedStars, setValue]);

  const onFormSubmit = (data: CommentFormData) => {
    onSubmit(data);
    onClose();
  };

  return (
    <div
      className="w-[64.9rem] h-[57.1rem] py-[2.4rem] px-[12.8rem] rounded-[1.6rem] text-[#434343] shadow-lg
      fixed top-[10%] left-[28%] bg-[#FFF]
    "
    >
      <button
        onClick={onClose}
        className="absolute top-[2.4rem] left-[2.4rem] bg-transparent border-none"
      >
        <CloseBtnIcon width="2.4rem" height="2.4rem" />
      </button>

      <h5 className="heading-5 mb-[0.8rem]">
        نظر خود را با ما در میان بگذارید
      </h5>
      <p className="body-3 text-[#898989] mb-[1.6rem]">
        در مورد {productTitle}
      </p>

      <div className="flex items-center gap-[0.8rem] mb-[2.4rem]">
        <span className="button-2">امتیاز دهید</span>
        <div className="flex gap-[0.4rem]">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon
              key={i}
              width="1.6rem"
              height="1.5rem"
              // className={
              //   i <= (watchedStars ?? 0) ? "text-yellow-400" : "text-gray-300"
              // }
              onClick={() => setValue("stars" as Path<CommentFormData>, i)}
            />
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="w-[39.2rem] flex flex-col gap-[0.4rem] mb-[0.8rem]">
          <label className="body-4 text-[#CBCBCB]">نکات مثبت</label>
          <input
            {...register("positiveProps" as Path<CommentFormData>)}
            type="text"
            className="w-full h-[4rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <div className="w-[39.2rem] flex flex-col gap-[0.4rem] mb-[2.4rem]">
          <label className="body-4 text-[#CBCBCB]">نکات منفی</label>
          <input
            {...register("negativeProps" as Path<CommentFormData>)}
            type="text"
            className="w-full h-[4rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem]"
          />
        </div>

        <div className="w-[39.2rem] flex flex-col gap-[0.4rem] mb-[2.4rem]">
          <label className="body-4 text-[#CBCBCB]">متن نظر *</label>
          <textarea
            {...register("commentText" as Path<CommentFormData>, {
              required: true,
            })}
            className="w-full h-[9rem] border border-[#CBCBCB] px-[0.8rem] py-[0.6rem] rounded-[0.8rem] resize-none"
          />
          {errors.commentText && (
            <span className="text-red-500">متن نظر الزامی است.</span>
          )}
        </div>

        <PrimaryButton type="submit" className="w-full" text="ثبت دیدگاه" />
        <p className="caption-4 text-[#434343] text-center mt-[1.6rem]">
          ثبت دیدگاه به معنی موافقت شما با قوانین انتشار کاستومی است.
        </p>
      </form>
    </div>
  );
}

export default CommentForm;
