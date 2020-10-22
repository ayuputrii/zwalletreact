import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { EditUser } from "../../../Redux/Action/Users";

const AdminUserEdit = (props) => {
  const { location } = props;
  const [id_profile, setIdProfile] = React.useState(location?.data?.id_profile ?? "");
  const [username, setUsername] = React.useState(location?.data?.username ?? "");
  const [phone, setPhone] = React.useState(location?.data?.phone ?? "");

  const dispatch = useDispatch();
  const history = useHistory();

  console.log(props, "aha");
  const onSubmit = (e) => {
    e.preventDefault(e);
    dispatch(
      EditUser({
        id_profile: id_profile,
        username: username,
        phone: phone,
        history: props.history,
      })
    );
  };

  if (
    location.data == "" ||
    location.data == null ||
    location.data == undefined ||
    location.length <= 0
  )
    history.replace("/Admin");
  return (
    <div>
      <h2>Page Edit</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <label>
          username:
          <input
            type="textt"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          phone:
          <input
            type="textt"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button type="submit">Edit</button>
      </form>
    </div>
  );
};

export default AdminUserEdit;
