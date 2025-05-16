export default function NavTop() {
  return (
    <div className="h-[60px] border-b-[0.5px] border-stone-600 text-3xl font-bold pl-5 flex items-center justify-between">
      All Notes{" "}
      <div className="w-[40%] rounded-md h-[45%] mr-5 border-[0.5px] border-stone-600  text-[16px] font-light pl-3 flex items-center">
        {" "}
        Search...
      </div>
    </div>
  );
}
