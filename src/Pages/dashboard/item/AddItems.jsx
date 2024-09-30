import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import useAxiosOpen from "../../../hooks/useAxiosOpen";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_key = import.meta.env.VITE_image_hosting_key;

const img_hosting_api = `https://api.imgbb.com/1/upload?key=${img_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = useAxiosOpen();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    // image
    const imgFile = { image: data.image[0] };
    const res = await axiosOpen.post(img_hosting_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      // send data via admin
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.name} has been saved successfully!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log(res.data);
  };
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What`s New"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe`s Name*</span>
            </div>
          </div>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
            {...register("name", { required: true })}
          />
          <div className="flex gap-8 w-full">
            {/* Category */}
            <div className="w-1/2">
              <div className="form-control ">
                <div className="label">
                  <span className="label-text">Category Type*</span>
                </div>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soup">Soup</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="w-1/2">
              <div className="form-control">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
              </div>
              <input
                type="number"
                placeholder="price"
                className="input input-bordered w-full "
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              {...register("recipe", { required: true })}
              placeholder="recipe details"
            ></textarea>
          </div>
          <div className="w-full form-control">
            <input
              type="file"
              {...register("image", { required: true })}
              className="file-input file-input-ghost w-full max-w-xs"
            />
          </div>
          <button className="btn uppercase">
            add item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
