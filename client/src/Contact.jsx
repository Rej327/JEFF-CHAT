import Avatar from "./Avatar.jsx";

export default function Contact({ id, username, onClick, selected, online }) {
  return (
    <div
      key={id}
      onClick={() => onClick(id)}
      className={
        "border-b border-gray-100 flex items-center gap-2 cursor-pointer hover:bg-green-50 duration-500 delay-50 " +
        (selected
          ? "bg-green-50 duration-500 delay-50"
          : "duration-500 delay-50")
      }
    >
      {selected && (
        <div className="w-1 bg-green-500 h-12 rounded-r-md duration-500 delay-50"></div>
      )}
      <div className="flex gap-2 py-2 pl-4 items-center duration-500 delay-50">
        <Avatar
          online={online}
          username={username}
          userId={id}
          className="duration-500 delay-50"
        />
        <span className="text-gray-800 duration-500 delay-50">{username}</span>
      </div>
    </div>
  );
}
