import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import UseAxios from "../../Hooks/UseAxios";
import UseCart from "../../Hooks/UseCart";




const FoodCard = ({item}) => {
//-------------------------
    const {_id ,name, image, price, recipe } = item;
//---------------------------
const {user}=UseAuth()
const navigate=useNavigate()
const location=useLocation()
const [axiosSecure]=UseAxios()
const [,refetch]=UseCart()


    const handleAddToCart=food=>{
     // console.log(food, user.email);
    if(user && user.email){
      //send card item to the database
const cartItem={
  menuId:_id,
  email:user.email,
  name,
  image,
  price,
}
axiosSecure.post('/carts',cartItem)
.then(res=>{
  //console.log(res.data);
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${name} added to your cart`,
      showConfirmButton: false,
      timer: 1500
    });
    //refetch cart and update
    refetch()
  }
})
    }
    else{
      Swal.fire({
        title: "You are not login",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!"
      }).then((result) => {
        if (result.isConfirmed) {
         //send login page
         navigate('/login', {state:{from:location}})
        }
      });
    }
    }
//----------------------

    return (
        <div><div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">${price}</p>
        <div className="card-body flrx flex-col items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-10">Add to Cart</button>
          </div>
        </div>
      </div>
            
        </div>
    );
};

export default FoodCard;