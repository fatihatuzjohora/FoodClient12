import Swal from "sweetalert2";
import ShareTitle from "../Components/ShareTitle/ShareTitle";
import UseMenu from "../Hooks/UseMenu";
import UseAxios from "../Hooks/UseAxios";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, ,refetch] = UseMenu();
  const [axiosSecure] = UseAxios();
  //------------
  const handelDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
          console.log(res.data.deletedCount);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <ShareTitle heading="Manage All Items" subheading="Hurry Up"></ShareTitle>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td> {index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                      <button className="btn btn-ghost btn-xs">Update</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handelDeleteItem(item)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
