import Image from 'next/image';

const Card = ({ heading, body }) => {
  return (
    <div className="flex-1 flex-grow w-full max-w-md bg-gray-200 border border-gray-200 rounded-2xl p-8">
        <Image src={'/assets/icon.png'} width={30} height={30} alt='icon' />
      <h1 className="text-lg font-semibold mt-4">{heading}</h1>
      <p className="text-sm text-gray-500 font-light mt-1.5 leading-6">{body}</p>
    </div>
  );
};

export default Card;
