import Button from "../../common/Button";
const Home: React.FC = () => {
   return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-between"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/online-shopping-concept_23-2151896838.jpg?semt=ais_hybrid&w=740')",
      }}
    >
      {/* Overlay */}
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>

      {/* Top bar */}
      <div className="flex justify-end p-4 space-x-4 relative z-10">
        <Button label="Login" variant="outlined" />
        <Button label="Register" variant="outlined" />
      </div>

      {/* Center slogan */}
      <div className="flex justify-center items-center flex-grow text-center px-4 relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow">
          Reimagine Fashion With AI!!
        </h1>
      </div>

      {/* Bottom button */}
      <div className="flex justify-center p-6 relative z-10">
        <Button label="Browse Outfits" />
      </div>
    </div>
  );
};
export default Home;
