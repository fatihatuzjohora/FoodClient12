import { useForm } from "react-hook-form";
import ShareTitle from "../Components/ShareTitle/ShareTitle";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";
import UseAxios from "../Hooks/UseAxios";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
//console.log(image_hosting_api);
const AddItems = () => {
  const { register, handleSubmit , reset} = useForm();
  const axiosPublic = UseAxiosPublic();
  const [axiosSecure] = UseAxios();

  const onSubmit = async (data) => {
     // console.log(data);
    //image update to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      //now send the menu item to the data sever with the image
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
    //  console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        //show success popup
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };
  return (
    <div>
      <ShareTitle heading="add an item" subheading="what's new?"></ShareTitle>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                placeholder="Recipe Name"
                {...register("name", { required: true })}
                className="input input-bordered w-full "
              />
            </label>
          </div>

          <div className="grid grid-cols-2 gap-6 my-6">
            {/* category  */}
            <div className="form control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>

              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled hidden value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price  */}
            <div>
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  placeholder="Price"
                  {...register("price", { required: true })}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* recepi detile  */}
          <div className="my-6">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Detils</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Detils"
              ></textarea>
            </label>
          </div>
          <div className="my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          <button className="btn">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
