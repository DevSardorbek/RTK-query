import React, { useState, useEffect } from "react";
import "../../../sass/__createUser.scss";
import { usePostusersMutation } from "../../../context/api/userApi";
import { toast } from "react-toastify";

let initialstate = {
  fname: "",
  lname: "",
  age: "",
};

const CreateUser = () => {
  let [createUser, { isError, isLoading, isSuccess }] = usePostusersMutation();

  const [newUser, setNewUser] = useState(initialstate);

  useEffect(() => {
    if (isSuccess) {
      setNewUser(initialstate);
      toast.success("User Qo'shildi");
    }
    if (isError) {
      toast.error("User Qo'shilmadi");
    }
  }, [isSuccess, isError]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log(newUser);
    createUser(newUser);
  };

  return (
    <div className="create_user">
      <div className="container">
        <form onSubmit={handleCreateUser}>
          <input
            value={newUser.fname}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, fname: e.target.value }))
            }
            type="text"
            placeholder="First-name"
          />
          <input
            value={newUser.lname}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, lname: e.target.value }))
            }
            type="text"
            placeholder="Last-name"
          />
          <input
            value={newUser.age}
            onChange={(e) =>
              setNewUser((prev) => ({ ...prev, age: e.target.value }))
            }
            type="number"
            placeholder="User-age"
          />
          <button type="submit">
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
