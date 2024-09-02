interface Props {
  title: string;
}

const button = ({ title }: Props) => {
  return (
    <button className="bg-white border-[1px] border-slate-200 text-blue-700 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition ease-in-out ">
      {title}→
    </button>
  );
};

export default button;
