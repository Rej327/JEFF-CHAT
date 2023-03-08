import {
  Profile1,
  Profile2,
  Profile3,
  Profile4,
  Profile5,
  Profile6,
  Profile7,
  Profile8,
} from "./assets";

export default function Avatar({ userId, username, online }) {
  const colors = [
    Profile1,
    Profile2,
    Profile3,
    Profile4,
    Profile5,
    Profile6,
    Profile7,
    Profile8,
  ];

  // "bg-teal-300",
  //   "bg-red-300",
  //   "bg-green-300",
  //   "bg-purple-300",
  //   "bg-blue-300",
  //   "bg-yellow-300",
  //   "bg-orange-300",
  //   "bg-pink-300",
  //   "bg-fuchsia-300",
  //   "bg-rose-300",
  const userIdBase10 = parseInt(userId.substring(10), 16);
  const colorIndex = userIdBase10 % colors.length;
  const color = colors[colorIndex];
  return (
    <div className={"w-8 h-8 relative rounded-full flex items-center " + color}>
      <img
        className="w-8 h-8 relative rounded-full flex items-center"
        src={color}
      />

      {online && (
        <div className="absolute w-3 h-3 bg-green-600 bottom-0 right-0 rounded-full border border-white"></div>
      )}
      {!online && (
        <div className="absolute w-3 h-3 bg-red-600 bottom-0 right-0 rounded-full border border-white"></div>
      )}
    </div>
  );
}
