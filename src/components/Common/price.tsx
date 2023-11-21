export default function ({ price }: { price: string }) {
  return (
    <>
      <p className="text-yellow-300 font-bold text-2xl ">
        {`$${price.split(".")[0]}`}
      </p>
      <span className="text-white text-sm font-normal ">
        {price.split(".")[1]
          ? Number(price.split(".")[1]) < 10
            ? `.0${price.split(".")[1]}`
            : `.${price.split(".")[1]}`
          : ".00"}
      </span>
    </>
  );
}
